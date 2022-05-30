const connectionDb = require('./../../database/conection')
const Producto = require('./model/product')

/**
 * funcion: crea un nuevo producto
 * @param {Request} req
 * @param {Response} callback
 * @returns {Producto}
 */
exports.crearProducto = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body
    let producto = new Producto(body)
    await producto.save()
    return callback(null, {
      producto,
    })
  } catch (error) {
    return callback(error.message)
  }
}

/**
 * actualiza un producto -> prueva
 * @param {Request} req
 * @param {Object} callback
 * @returns producto actualizado
 */
exports.actualizarProducto = async (req, callback) => {
  try {
    await connectionDb()
    let body = req.body
    const id = req.params.id
    let producto = await Producto.findByIdAndUpdate(
      id,
      {nombre: body.nombre,
      descripcion: body.descripcion}
    )         
    return callback(null, {
      producto,
    })
  } catch (error) {
    return callback(error.message)
  }
}

/**
 * retorna una lista con los productos
 * @param {*} req
 * @param {*} callback
 * @returns
 */
exports.listarProducto = async (req, callback) => {
  try {
    await connectionDb()
let productos = await Producto.find()
    return callback(null, {
      productos,
    })
  } catch (error) {
    return callback(error.message)
  }
}

/**
 * elimina un producto, hace falta hacer test
 * @param {*} req 
 * @param {*} callback 
 * @returns 
 */
exports.eliminarProducto = async(req, callback) => {
  try {
    await connectionDb()
    let id = req.params.id
    await Producto.findByIdAndDelete(id)
    return callback(null,{status:'ok'})

  } catch (error) {
    return callback(error.message)    
  }
}
