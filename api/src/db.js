const mongoose = require('mongoose');

(async () => {
  try {      
    const db = await mongoose.connect("mongodb://localhost/basto");
    console.log('DB connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
})()