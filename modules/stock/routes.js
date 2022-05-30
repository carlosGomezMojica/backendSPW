const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/crear',controller.crearStock)
router.post('/actualizar/:id', controller.actualizarStock)
router.delete('/eliminar/:id', controller.eliminarStock)
router.get('/listar',controller.listarStock)

module.exports = router