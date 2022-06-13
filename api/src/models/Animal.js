const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema(
    {
        senasa_id: {
            type: String,
            require: true,
            unique: true,
            max: 16
        },
        animal_tipo: {
            type: String,
            require: true,
            enum: ['Novillo', 'Toro', 'Vaquillona']
        },
        peso_kg: {
            type: Number,
            require: true,
        },
        potrero_nombre: {
            type: String,
            require: true,
            max: 200
        },
        dispositivo_tipo: {
            type: String,
            require: true,
            enum: ['COLLAR', 'CARAVANA'],
        },
        dispositivo_nro: {
            type: String,
            require: true,
            max: 8
        },
    }, { timestamps: false, versionKey: false }
)

module.exports = Animal = mongoose.model('animals', animalSchema);
