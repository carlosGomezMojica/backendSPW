const connectionDb = require('./../../database/conection')
const Stock = require('./model/stock')


exports.crearStock = async(req,callback) =>{
    try {
        await connectionDb()
        let body = req.body

        let stock = new Stock({
            _id_producto:body._id_producto,
            cantidad: body.cantidad
        })
        stock.save()
        return callback(null,{
            status:'creado'
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.actualizarStock = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id
        let body = req.body
        let fechaActualizacion = Date.now()

        await Stock.findByIdAndUpdate(id,{
            _id_producto:body._id_producto,
            fecha: fechaActualizacion,
            cantidad: body.cantidad    
        })

        return callback(null,{
            status:'actualizado'
        })
    } catch (error) {
        return callback(error.message)
    }
}



exports.eliminarStock = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id

        await Stock.findByIdAndDelete(id)

        return callback(null,{
        status:'eliminado'    
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.listarStock = async(req,callback) =>{
    try {
        await connectionDb()
        let stock = await Stock.find().populate('_id_producto')
        return callback(null,{
            stock
        })
    } catch (error) {
        return callback(error.message)
    }
}