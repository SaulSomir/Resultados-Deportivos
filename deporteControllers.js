const Deporte = require("../models/deporte");

exports.consultarTodos = async (req, res) => {
    try {
        const deporte = await Deporte.find();

        res.json({ deportes });
    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.consultarUno = async (req, res) => {
    try {
        const deporte = await Deporte.findById(req.params.id);
        if (!deporte) {
            res.status(400).send("No se encontro el deporte");
        }
        else {
            res.json({ deporte });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.agregarNuevo = async (req, res) => {
    try {
        const buscarDeporte = await Deporte.findOne({ nombre: req.body.nombre });

        if (buscarDeporte) {
            res.status(400).send("El deporte ya existe en la base de datos");
        }
        else {
            const deporte = new Deporte(req.body);
            await deporte.save();
            res.json({ deporte });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};

exports.actualizar = async (req, res) => {
    try {
        const { nombre, equipo, marcador } = req.body;
        const datosNuevos = { nombre, equipo, marcador };
        const deporte = await Deporte.findByIdAndUpdate(req.params.id, datosNuevos);
        if (deporte) {
            res.json({ deporte });
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

exports.eliminar = async (req, res) => {
    try {
        const deporte = await Deporte.findByIdAndRemove(req.params.id);
        if (!deporte) {
            res.status(400).send("No se encontro el deporte");
        }
        else {
            res.json({ deporte });
        }

    }
    catch (err) {
        console.log("hubo un error");
        console.log(err);
        res.status(400).send("hubo un error");
    }
};
