const { Router } = require('express');

const router = Router();

const Animal = require("../models/Animal");

router.get('/', async (req, res) => {

  try {
    const animals = await Animal.find();
    res.status(200).send(animals);
  } catch (e) {
    res.status(404).send('Data not found.');
  }

})

router.get('/:dispositivo_nro', async (req, res) => {

  let nro = req.params.dispositivo_nro;

  try {
    if (nro) {
      const animals = await Animal.find({ dispositivo_nro: nro });
      res.status(200).send(animals);
    }
  } catch (e) {
    res.status(404).send('Data not found.');
  }

})

router.post('/add', async (req, res) => {

  const animal = Animal(req.body);

  await animal.save();

  res.send('Data saved.');

})


router.get('/edit/:id', async (req, res) => {

  const id = req.params.id;

  try {
    if (id) {
      const animal = await Animal.findById(id);
      res.status(200).send(animal);
    } else {
      res.status(404).send('Data not found.');
    }
  } catch (e) {
    res.status(404).send('Wrong Id.');
  }

})

router.put('/edit/:id', async (req, res) => {

  const id = req.params.id;

  try {
    if (id && req.body)  {
      await Animal.findByIdAndUpdate(id, req.body);
      res.status(200).send('Data updated.');
    } else {
      res.status(404).send('Data not found.');
    }
  } catch (e) {
    res.status(404).send('Wrong Id.');
  }

})

router.delete('/delete/:id', async (req, res) => {

  const id = req.params.id;

  try {
    if (id)  {
      await Animal.findByIdAndDelete(id);
      res.status(200).send('Data deleted.');
    } else {
      res.status(404).send('Data not found.');
    }
  } catch (e) {
    res.status(404).send('Wrong Id.');
  }

})

module.exports = router;

