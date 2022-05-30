const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.post('/crear', controller.crearEstanteria)
router.post('/actualizar/:id', controller.actualizarEstanteria)
router.delete('/eliminar/:id', controller.eliminarEstanteria)
router.get('/listar',controller.listarEstanteria)

module.exports = router
