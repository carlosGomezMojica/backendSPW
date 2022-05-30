const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/crear',controller.crearVentas)
router.post('/actualizar/:id',controller.actualizarVentas)
router.delete('/eliminar/:id',controller.eliminarVentas)
router.get('/listar',controller.listarVentas)

module.exports = router