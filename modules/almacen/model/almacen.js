const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let alamacenSchema = new Schema({
    _id_producto:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: [true, 'el id de producto es requerido']
    },
    fecha:{
        type: Date,
        default: Date.now(),
        required: [true,'la fecha es requerida']
    },
    cantidad:{
        type: Number,
        required: [true,'la cantidad es requerida']
    }
})

alamacenSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})
module.exports = mongoose.model('Almacen',alamacenSchema)