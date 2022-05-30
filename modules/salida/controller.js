const salidaController = require('./services')

/**
 * controlador para la creacion del salida
 */
 exports.crearSalida = async (req, res) => {
    console.log('controller.salida.crearSalida')
    await salidaController.crearSalida(req, function (err, result) {
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
 * controlador para la actualizacion del salida
 */
 exports.actualizarSalida = async (req, res) => {
    console.log('controller.salida.actualizarSalida')
    await salidaController.actualizarSalida(req, function (err, result) {
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
 * controlador para la eliminacion del salida
 */
 exports.eliminarSalida = async (req, res) => {
    console.log('controller.salida.eliminarSalida')
    await salidaController.eliminarSalida(req, function (err, result) {
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
 * controlador para listar los salidas
 */
 exports.listarSalida = async (req, res) => {
    console.log('controller.salida.listarSalida')
    await salidaController.listarSalida(req, function (err, result) {
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