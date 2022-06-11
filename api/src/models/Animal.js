const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema(
    {
       dispositivo_nro: {
        type: String,
        require: true,
        unique: true
       },
       dispositivo_tipo: {
        type: String,
        require: true
       },
       senasa_id: {
        type: String,
        require: true
       },
       peso_kg: {
        type: Number,
        require: true,
       },
       potrero_nombre: {
        type: String,
        require: true
       },
       tipo: {
        type: String,
        require: true,
       },
    }, { timestamps: false, versionKey: false }
)

module.exports = Animal = mongoose.model('animals', animalSchema);
