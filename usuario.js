const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: { type: String, require: true },
    apellidos: { type: String, require: true },
    documentos: { type: String, require: true },
    telefono: { type: String, require: true },
});

module.exports = mongoose.model('usuario', UsuarioSchema);
