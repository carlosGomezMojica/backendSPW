const connectionDb = require('./../../database/conection')
const Ventas = require('./model/ventas')


exports.crearVentas = async(req,callback) =>{
    try {
        await connectionDb()
        let body = req.body

        let venta = new Ventas({
            _id_usuario:body.id_usuario,
            ventas: body.ventas
        })

        venta.save()
        return callback(null,{
            status:'creado'
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.actualizandoVentas = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id 
        let body = req.body

        await Ventas.findByIdAndUpdate(id,{
            _id_usuario:body.id_usuario,
            fecha: body.fecha,
            ventas: body.ventas
        })
        return callback(null,{
            status:'actualizado'
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.eliminarVenta = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id
        await Ventas.findByIdAndDelete(id)
        return callback(null,{
            status:'eliminado'
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.listarVenta = async(req,callback) =>{
    try {
        await connectionDb()
        let ventas = await Ventas.find()
        return callback(null,{
            ventas
        })
    } catch (error) {
        return callback(error.message)
    }
}