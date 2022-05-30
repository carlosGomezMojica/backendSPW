const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/crear', controller.createProducto);//ruta para la creacion de un producto
router.post('/actualizar/:id', controller.actualizarProducto);//ruta para actualizar producto
router.delete('/eliminar/:id', controller.eliminarProducto)//ruta para la eliminacion de un producto
router.get('/listar', controller.listarProducto);//retorna los productos 

module.exports = router
