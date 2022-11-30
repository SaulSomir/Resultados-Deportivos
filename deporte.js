const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeporteSchema = new Schema({
    nombre: { type: String, require: true },
    equipo: { type: String, require: true },
    marcador: { type: String, require: true },
});

module.exports = mongoose.model('deporte', DeporteSchema);
