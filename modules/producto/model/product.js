const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let schema = mongoose.Schema

let productoSchema = new schema({
    nombre:{
        type: String,
        required: [true,'el nombre es necesario']
    },
    descripcion: {
        type: String,
        required: [true,'la descripción es necesaria']
    }
})

productoSchema.plugin(uniqueValidator,{message: '{PATH} must be unique'})

module.exports = mongoose.model('Producto', productoSchema)