const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let salidaSchema = new Schema({
    fecha: {
        type: Date,
        defaul: Date.now(),
        required: [true,'la fecha de salida es necesaria']
    },
    _id_almacen: {
        type: Schema.Types.ObjectId,
        ref: 'Almacen',
        required: [true, 'el id del almacen es requerido']
    },
    _id_usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:[true, 'el id del usuario es requerido']
    },
    _id_estanteria:{
        type: Schema.Types.ObjectId,
        ref: 'Estanteria',
        required: [true, 'el id de la estanteria es requerido']
    },
    cantidad:{
        type: Number,
        required: [true,'la cantidad es necesaria']
    }
})

salidaSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})

module.exports = mongoose.model('Salida',salidaSchema)