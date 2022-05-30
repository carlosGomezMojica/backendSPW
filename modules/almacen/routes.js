const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/crear', controller.crearAlmacen)
router.post('/actualizar/:id', controller.actualizarAlmacen)
router.delete('/eliminar/:id', controller.eliminarAlmacen)
router.get('/listar', controller.listarAlmacen)

module.exports = router