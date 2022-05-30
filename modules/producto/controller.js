const productoController = require('./services')

/**
 * controlador para la creacion del producto
 */
exports.createProducto = async (req, res) => {
  console.log('controller.producto.crearProducto')
  await productoController.crearProducto(req, function (err, result) {
    if (err) {
      return res.status(400).json({
        success: false,
        body: err,
      })
    }
    return res.status(200).json({
      success: true,
      body: result,
    })
  })
}

/**
 * controlador para la actualizacion del producto
 */
exports.actualizarProducto = async (req, res) => {
  console.log('controller.producto.actualizarProducto')
  await productoController.actualizarProducto(req, function (err, result) {
    if (err) {
      return res.status(400).json({
        success: false,
        body: err,
      })
    }
    return res.status(200).json({
      success: true,
      body: result,
    })
  })
}

/**
 * controlador para listar productos
 */
 exports.listarProducto = async (req, res) => {
  console.log('controller.producto.listarProducto')
  await productoController.listarProducto(req, function (err, result) {
    if (err) {
      return res.status(400).json({
        success: false,
        body: err,
      })
    }
    return res.status(200).json({
      success: true,
      body: result,
    })
  })
}

/**
 * controlador para eliminar producto
 */
 exports.eliminarProducto = async (req, res) => {
  console.log('controller.producto.eliminarProducto')
  await productoController.eliminarProducto(req, function (err, result) {
    if (err) {
      return res.status(400).json({
        success: false,
        body: err,
      })
    }
    return res.status(200).json({
      success: true,
      body: result,
    })
  })
}