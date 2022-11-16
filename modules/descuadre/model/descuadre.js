const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let descuadreSchema = new Schema({
    fecha:{
        type: Date,
        default: Date.now,
        required:[true,'la fecha es requerida']
    },
    descripcion:{
        type: String,
        required: [true,'la descripcion es necesaria']
    },
    correccion:{
        type: String,
        required: [true,'la cerrocion es necesaria']
    },
    informe:{
        type: String,
        required: [true,'el informe es necesario']
    }
})

descuadreSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})
module.exports = mongoose.model('Descuadre',descuadreSchema)