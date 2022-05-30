const express = require('express');
const controller = require('./controller')

var router = express.Router()

router.post('/crear',controller.crearDescuadre)
router.post('/actualizar/:id', controller.actualizarDescuadre)
router.delete('/eliminar/:id', controller.eliminarDescuadre)
router.get('/listar',controller.listarDescuadre)

module.exports = router