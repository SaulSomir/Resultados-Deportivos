const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get('/', usuarioController.all);
router.get('/:id', usuarioController.find);
router.post('/', usuarioController.store);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

module.exports = routers;
