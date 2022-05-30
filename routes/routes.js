const express = require('express')
var router = express.Router()

let producto = require('./../modules/producto/routes')
let descuadre = require('./../modules/descuadre/routes')
let almacen = require('./../modules/almacen/routes')
let estanteria = require('./../modules/estanteria/routes')
let salida = require('./../modules/salida/routes')
let stock = require('./../modules/stock/routes')
let usuario = require('./../modules/usuario/routes')
let venta = require('./../modules/ventas/routes')
let auth = require('./../modules/auth/routes')

router.use("/producto", producto)//rutas para producto
router.use("/descuadre",descuadre)//rutas para descuadre
router.use("/almacen", almacen)//rutas para almacen
router.use("/estanteria", estanteria)// rutas para estanteria
router.use("/salida",salida)//rutas para las salidas
router.use("/stock", stock)//rutas para el stock
router.use("/usuario",usuario)//rutas para los usuarios
router.use("/ventas",venta)//rutas de las ventas
router.use("/auth",auth)// ruta login

module.exports = router
