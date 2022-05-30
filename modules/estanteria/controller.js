const estanteriaController = require('./services')

/**
 * controlador para la creacion del estanteria
 */
 exports.crearEstanteria = async (req, res) => {
    console.log('controller.estanteria.crearEstanteria')
    await estanteriaController.crearEstanteria(req, function (err, result) {
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
 * controlador para la actualizacion del estanteria
 */
 exports.actualizarEstanteria = async (req, res) => {
    console.log('controller.estanteria.actualizarEstanteria')
    await estanteriaController.actualizarEstanteria(req, function (err, result) {
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
 * controlador para la eliminacion del estanteria
 */
 exports.eliminarEstanteria = async (req, res) => {
    console.log('controller.estanteria.eliminarEstanteria')
    await estanteriaController.eliminarEstanteria(req, function (err, result) {
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
 * controlador para listar los estanterias
 */
 exports.listarEstanteria = async (req, res) => {
    console.log('controller.estanteria.listarEstanteria')
    await estanteriaController.listarEstanteria(req, function (err, result) {
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