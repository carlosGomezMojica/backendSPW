const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/crear', controller.crearSalida)
router.post('/actualizar/:id',controller.actualizarSalida)
router.delete('/eliminar/:id', controller.eliminarSalida)
router.get('/listar',controller.listarSalida)

module.exports = router