const connectionDb = require('./../../database/conection')
const Estanteria = require('./model/estanteria')

exports.crearEstanteria = async (req, callback) => {
  try {
    await connectionDb()

    let body = req.body

    let estanteria = new Estanteria({
        _id_product: body.id_product,
        cantidad: body.cantidad
    })

    estanteria.save()
    return callback(null, {status:"creado"})
  } catch (error) {
    return callback(error.message)
  }
}

exports.actualizarEstanteria = async (req, callback) => {
  try {
    await connectionDb()
    let id = req.params.id
    let body = req.body

    await Estanteria.findByIdAndUpdate(id,{
        _id_product: boby.id_product,
        fecha: body.fecha,
        cantidad: body.cantidad
    })
    return callback(null, {status:"actualizado"})
  } catch (error) {
    return callback(error.message)
  }
}

exports.eliminarEstanteria = async (req, callback) => {
  try {
    await connectionDb()
    let id = req.params.id

    await Estanteria.findByIdAndDelete(id)
    return callback(null, {status:"eliminado"})
  } catch (error) {
    return callback(error.message)
  }
}

exports.listarEstanteria = async (req, callback) => {
  try {
    await connectionDb()

    var estanteria = await Estanterias.find()
    
    return callback(null, {estanteria})
  } catch (error) {
    return callback(error.message)
  }
}
