const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let stockSchema = new Schema({
    _id_producto:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required:[true, 'se necesita el id del producto']
    },
    fecha:{
        type: Date,
        default: Date.now(),
        required: [true,'se necesita la fecha para el stock del dia']
    },
    cantidad:{
        type: Number,
        required:[true,'se necesita la cantidad del producto']
    }
})

stockSchema = stockSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})
module.exports = mongoose.model('Stock',stockSchema)