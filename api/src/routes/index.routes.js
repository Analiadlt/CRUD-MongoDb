const { Router } = require('express');

const router = Router();

const Animal = require("../models/Animal");

router.get('/', async (req, res) => {

  try {
    const animals = await Animal.find();
    res.status(200).send(animals);
  } catch (e) {
    res.status(404).send([]);
  }

})

router.post('/add', async (req, res) => {

  try {
    const { senasa_id, peso_kg, potrero_nombre, dispositivo_nro } = req.body;
    if (senasa_id && peso_kg && potrero_nombre && dispositivo_nro) {
      const animal = Animal(req.body);
      await animal.save();
      const animals = await Animal.find();
      res.send(animals);
    } else res.status(404).send([]);
  } catch {
    res.status(404).send([]);
  }

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

router.put('/edit', async (req, res) => {

  const id = req.body.id;
  const data = req.body.prevData;

  try {
    if (id && data) {
      await Animal.findByIdAndUpdate(id, data);
      const animals = await Animal.find();
      res.status(200).send(animals);
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
    if (id) {
      await Animal.findByIdAndDelete(id);
      res.status(200).send('Data deleted.');
    } else {
      res.status(404).send('Data not found.');
    }
  } catch (e) {
    res.status(404).send('Wrong Id.');
  }
})

// router.get('/:senasa_id', async (req, res) => {

//   let id = req.params.senasa_id;

//   try {
//     if (id) {
//       const animal = await Animal.find({ senasa_id: id });
//       res.status(200).send(animal);
//     }
//   } catch (e) {
//     res.status(404).send('Data not found.');
//   }
// })

module.exports = router;

