const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'El id es necesario']   
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellidos: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email:{
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);