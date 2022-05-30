const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let estanteriaSchema = new Schema({
    _id_product:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: [true,'el id del producto es necesario']
    },
    fecha:{
        type: Date,
        default:Date.now(),
        required: [true,'la fecha de almacenaje es necesaria']
    },
    cantidad: {
        type: Number,
        required: [true, 'la cantidad del producto es necesaria']
    }
})

estanteriaSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})
module.exports = mongoose.model('Estanteria', estanteriaSchema)