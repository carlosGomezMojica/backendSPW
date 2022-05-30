const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/crear', controller.crearUsuario)
router.post('/actualizar/:id',controller.actualizarUsuario)
router.delete('/eliminar/:id',controller.eliminarUsuario)
router.get('/listar', controller.listarUsuario)

module.exports = router