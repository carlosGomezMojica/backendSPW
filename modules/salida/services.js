const connectionDb = require('./../../database/conection')
const Salida = require('./model/salida')

exports.crearSalida = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body
    let salida = new Salida({
      fecha: new Date.now(),
      _id_almacen: body.id_almacen,
      _id_usuario: body.id_usuario,
      _id_estanteria: body.id_estanteria,
      cantidad: body.cantidad,
    })
    salida.save()
    return callback(null, { status: 'creado' })
  } catch (error) {
    return callback(error.message)
  }
}

exports.actualizarSalida = async (req, callback) => {
  try {
    await connectionDb()
    let id = req.params.id
    let body = req.body

    await Salida.findByIdAndUpdate(id, body)

    return callback(null, { status: 'actualizado' })
  } catch (error) {
    return callback(error.message)
  }
}

exports.eliminandoSalida = async (req, callback) => {
  try {
    await connectionDb()
    let id = peq.params.id

    await Salida.findByIdAndDelete(id)

    return callback(null, { status: 'eliminado' })
  } catch (error) {
    return callback(error.message)
  }
}

exports.crearEstanteria = async (req, callback) => {
  try {
    await connectionDb()
    let salidas = await Salida.find()
    return callback(null, { salidas })
  } catch (error) {
    return callback(error.message)
  }
}
