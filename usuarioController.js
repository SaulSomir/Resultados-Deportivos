const Usuario = require("../models/usuario");

exports.all = async (req, res) => {
    try {
        const usuarios = await Usuario.find();

        res.json({ usuarios });
    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(400).send("No se encontro el usuario");
        }
        else {
            res.json({ usuario });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.store = async (req, res) => {
    try {
        const buscarUsuario = await Usuario.findOne({ documento: req.body.documento });
        console.log(buscarUsuario);
        if (buscarUsuario) {
            res.status(400).send("El documento ya existe en la base de datos");
        }
        else {
            const usuario = new Usuario(req.body);
            await usuario.save();
            res.json({ usuario });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.update = async (req, res) => {
    try {
        const { nombre, apellidos, documento, telefono } = req.body;
        const datosNuevos = { nombre, apellidos, documento, telefono };
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, datosNuevos);
        if (usuario) {
            res.json({ usuario });
        }
        else {
            res.status(400).send("Error en actualizar");
        }        
    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.delete = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndRemove(req.params.id);
        if (!usuario) {
            res.status(400).send("No se encontro el usuario");
        }
        else {
            res.json({ usuario });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};
