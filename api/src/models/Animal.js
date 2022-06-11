const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema(
    {
        senasa_id: {
            type: String,
            require: true
           },
        animal_tipo: {
            type: String,
            require: true,
           },   
        peso_kg: {
            type: Number,
            require: true,
           },
        potrero_nombre: {
            type: String,
            require: true
           },
       dispositivo_tipo: {
        type: String,
        require: true
       },
       dispositivo_nro: {
        type: String,
        require: true,
        unique: true
       },       
    }, { timestamps: false, versionKey: false }
)

module.exports = Animal = mongoose.model('animals', animalSchema);
