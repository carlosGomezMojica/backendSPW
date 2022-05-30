const mongoose = require("mongoose");
const uniqueValidator =require('mongoose-unique-validator')

let Schema = mongoose.Schema

let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required:[true,'se necesita el nombre del usuario']
    },
    apellido:{
        type: String,
        required:[true,'se necesita el apellido del usuario']
    },
    tipoUsuario:{
        type: String,
        enum: ['GE','EM','AD'],
        required: [true,'se necesita el tipo de usuario']
    },
    codigoUsuario:{
        type: String,
        required: [true,'se necesita el código de usuario']
    },
    password:{
        type: String,
        required: [true,'la contraseña es necesaria']
    }
})

usuarioSchema.methods.toJSON = function () {
    let usuario = this
    let usuarioObject = usuario.toObject()
    delete usuarioObject.password
    return usuarioObject
}

usuarioSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})
module.exports = mongoose.model('Usuario',usuarioSchema)