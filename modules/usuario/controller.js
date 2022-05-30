const usuarioController = require('./services')

/**
 * controlador para la creacion del usuario
 */
 exports.crearUsuario = async (req, res) => {
    console.log('controller.usuario.crearUsuario')
    await usuarioController.crearUsuario(req, function (err, result) {
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
 * controlador para la actualizacion del usuario
 */
 exports.actualizarUsuario = async (req, res) => {
    console.log('controller.usuario.actualizarUsuario')
    await usuarioController.actualizarUsuario(req, function (err, result) {
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
 * controlador para la eliminacion del usuario
 */
 exports.eliminarUsuario = async (req, res) => {
    console.log('controller.usuario.eliminarUsuario')
    await usuarioController.eliminarUsuario(req, function (err, result) {
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
 * controlador para listar los usuarios
 */
 exports.listarUsuario = async (req, res) => {
    console.log('controller.usuario.listarUsuario')
    await usuarioController.listarUsuario(req, function (err, result) {
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