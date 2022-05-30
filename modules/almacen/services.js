const connectionDb = require('./../../database/conection')
const Almacen = require('./model/almacen')

exports.crearAlmacen = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body

    let almacen = new Almacen({
      _id_producto: body._id_producto,
      cantidad: body.cantidad,
    })

    almacen.save()
    return callback(null, {
      almacen,
    })
  } catch (error) {
    return callback(error.message)
  }
}

exports.actualizarAlmacen = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body
    let id = req.params.id

    var almacen = await Almacen.findByIdAndUpdate(
      { _id: id },
      { _id_producto: body._id_producto, fecha:Date.now(),cantidad: body.cantidad },
    )
    return callback(null, {
      almacen,
    })
  } catch (error) {
    return callback(error.message)
  }
}

exports.eliminarAlmacen = async (req, callback) => {
  try {
    await connectionDb()
    let id = req.params.id

    await Almacen.findByIdAndDelete(id)
    return callback(null, {})
  } catch (error) {
    return callback(error.message)
  }
}

exports.listarAlmacen = async (req, callback) => {
  try {
    await connectionDb()
    let almacen = await Almacen.find().populate('_id_producto')
    return callback(null, {
      almacen,
    })
  } catch (error) {
    return callback(error.message)
  }
}
