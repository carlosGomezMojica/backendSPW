const ventasServices = require('./services')

/**
 * controlador para la creacion de ventas
 */
 exports.crearVentas = async (req, res) => {
    console.log('controller.ventas.crearVentas')
    await ventasServices.crearVentas(req, function (err, result) {
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
 * controlador para la actualizacion del ventas
 */
 exports.actualizarVentas = async (req, res) => {
    console.log('controller.ventas.actualizarVentas')
    await ventasServices.actualizarVentas(req, function (err, result) {
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
 * controlador para la eliminacion del ventas
 */
 exports.eliminarVentas = async (req, res) => {
    console.log('controller.ventas.eliminarVentas')
    await ventasServices.eliminarVentas(req, function (err, result) {
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
 * controlador para listar los ventass
 */
 exports.listarVentas = async (req, res) => {
    console.log('controller.ventas.listarVentas')
    await ventasServices.listarVentas(req, function (err, result) {
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