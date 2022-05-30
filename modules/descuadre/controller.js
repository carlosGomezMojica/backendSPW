const descuadreController = require('./services')

/**
 * controlador para la creacion del descuadre
 */
 exports.crearDescuadre = async (req, res) => {
    console.log('controller.descuadre.crearDescuadre')
    await descuadreController.crearDescuadre(req, function (err, result) {
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
 * controlador para la actualizacion del descuadre
 */
 exports.actualizarDescuadre = async (req, res) => {
    console.log('controller.descuadre.actualizarDescuadre')
    await descuadreController.actualizarDescuadre(req, function (err, result) {
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
 * controlador para la eliminacion del descuadre
 */
 exports.eliminarDescuadre = async (req, res) => {
    console.log('controller.descuadre.eliminarDescuadre')
    await descuadreController.eliminarDescuadre(req, function (err, result) {
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
 * controlador para listar los descuadres
 */
 exports.listarDescuadre = async (req, res) => {
    console.log('controller.descuadre.listarDescuadre')
    await descuadreController.listarDescuadre(req, function (err, result) {
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