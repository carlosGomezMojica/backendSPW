const connectionDb = require('./../../database/conection')
const Descuadre = require('./model/descuadre')

exports.crearDescuadre = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body

    var descuadre = new Descuadre({
      fecha:Date.now(),
      descripcion: body.descripcion,
      correccion: body.correccion,
      informe: body.informe,
    })

    descuadre.save()
    return callback(null, {
      descuadre,
    })
  } catch (error) {
    return callback(error.message)
  }
}

exports.actualizarDescuadre = async (req, callback) => {
  try {
    await connectionDb()
    let id = peq.params.id
    let body = req.body

    await Descuadre.findByIdAndUpdate(id, {
      fecha: body.fecha,
      descripcion: body.descripcion,
      correccion: body.correccion,
      informe: body.informe,
    })
    return callback(null, {
      Descuadre,
    })
  } catch (error) {
    return callback(error.message)
  }
}

exports.eliminarDescuadre = async (req, callback) => {
  try {
    await connectionDb()
    let id = req.id

    await Descuadre.findByIdAndDelete(id)

    return callback(null, {
      status: 'el descuadre se a eliminado',
    })
  } catch (error) {
    return callback(error.message)
  }
}

exports.listarDescuadre = async (req, callback) => {
  try {
    await connectionDb()

    let descuadre = await Descuadre.find()
    return callback(null, {descuadre})
  } catch (error) {
    return callback(error.message)
  }
}
