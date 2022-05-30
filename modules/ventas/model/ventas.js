const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let ventaSchema = new Schema({
    _id_usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true,'el id del usuario es requerido']
    },
    fecha:{
        type: Date,
        default: Date.now(),
        required: [true,'la fecha es requerida']
    },
    ventas:[{
        _id_producto:{
            type: Schema.Types.ObjectId,
            ref: 'Producto',
            required: [true, 'el id del producto es requerido']
        },
        cantidad:{
            type: Number,
            required: [true, 'la cantidad es requerida']
        }
    }]
})

ventaSchema.plugin(uniqueValidator,{massage: '{PATH} must be unique'})

module.exports = mongoose.model('Venta',ventaSchema)