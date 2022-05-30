const almacenController = require('./services')

/**
 * controlador para la creacion del Almacen
 */
 exports.crearAlmacen = async (req, res) => {
    console.log('controller.almacen.crearAlmacen')
    await almacenController.crearAlmacen(req, function (err, result) {
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
 * controlador para la actualizacion del Almacen
 */
 exports.actualizarAlmacen = async (req, res) => {
    console.log('controller.almacen.actualizarAlmacen')
    await almacenController.actualizarAlmacen(req, function (err, result) {
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
   * controlador para la eliminar un Almacen
   */
   exports.eliminarAlmacen = async (req, res) => {
      console.log('controller.almacen.eliminarAlmacen')
      await almacenController.eliminarAlmacen(req, function (err, result) {
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
 * controlador para listar el Almacen
 */
 exports.listarAlmacen = async (req, res) => {
    console.log('controller.almacen.listarAlmacen')
    await almacenController.listarAlmacen(req, function (err, result) {
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