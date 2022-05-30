const stockController = require('./services')

/**
 * controlador para la creacion del stock
 */
 exports.crearStock = async (req, res) => {
    console.log('controller.stock.crearStock')
    await stockController.crearStock(req, function (err, result) {
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
 * controlador para la actualizacion del stock
 */
 exports.actualizarStock = async (req, res) => {
    console.log('controller.stock.actualizarStock')
    await stockController.actualizarStock(req, function (err, result) {
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
 * controlador para la eliminacion del stock
 */
 exports.eliminarStock = async (req, res) => {
    console.log('controller.stock.eliminarStock')
    await stockController.eliminarStock(req, function (err, result) {
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
 * controlador para listar los stocks
 */
 exports.listarStock = async (req, res) => {
    console.log('controller.stock.listarStock')
    await stockController.listarStock(req, function (err, result) {
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