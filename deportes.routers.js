const express = require('express');
const router = express.Router();
const deporteController = require("../controllers/deporteController");

router.get('/', deporteController.consultarTodos);
router.get('/:id', deporteController.consultarUno);
router.post('/', deporteController.agregarNuevo);
router.put('/:id', deporteController.actualizar);
router.delete('/:id', deporteController.eliminar);

module.exports = routers;
