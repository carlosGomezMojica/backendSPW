const connectionDb = require('./../../database/conection')
const Usuario = require('./model/usuario')
const Utils = require('./../../utils/utils')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


exports.crearUsuario = async function (req, callback) {
    console.log('cfo.services.usuarioServices.registerUsuario')
    try {
        const body = req.body;
        await connectionDb();
        let usuarioDB = await Usuario.findOne({codigoUsuario: body.codigoUsuario});
        if (usuarioDB) {
            return callback({message: 'USUARIO_DUPLICADO'});
        }

        let usuario = new Usuario({
            nombre: body.nombre,
            apellido: body.apellido,
            tipoUsuario: body.tipoUsuario,
            codigoUsuario: body.codigoUsuario,
            password: bcrypt.hashSync(body.password, 10)
        });

        usuarioDB = await usuario.save();

        let access_token = jwt.sign(
            {
                usuario: Utils.simplifyUsuarioForToken(usuarioDB)
            },
            process.env.SEED,
            {expiresIn: process.env.CADUCIDAD_TOKEN}
        )

        let refresh_token = jwt.sign(
            {
                usuario: Utils.simplifyUsuarioForToken(usuarioDB)
            },
            process.env.SEED,
            {expiresIn: process.env.CADUCIDAD_REFRESH_TOKEN}
        )

        return callback(null, {
            usuario: Utils.simplifyUsuarioForToken(usuarioDB),
            token: {
                access_token,
                refresh_token
            },
        });
    } catch (error) {
        return callback(error.message);
    }
}



exports.actualizarUsuario = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id
        let body = req.body

        await Usuario.findByIdAndUpdate(id,{
            nombre:body.nombre,
            apellido:body.apellido,
            tipoUsuario:body.tipoUsuario,
            codigoUsuario:body.codigoUsuario,
            password:body.password
        })

        return callback(null,{
            status:'actualizado'            
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.eliminarUsuario = async(req,callback) =>{
    try {
        await connectionDb()
        let id = req.params.id

        await Usuario.findByIdAndDelete(id)

        return callback(null,{
            status: 'eliminado'
        })
    } catch (error) {
        return callback(error.message)
    }
}


exports.listarUsuario = async(req,callback) =>{
    try {
        await connectionDb()

        let usuario = await Usuario.find()
        return callback(null,{
            usuario
        })
    } catch (error) {
        return callback(error.message)
    }
}