const connectionDb = require('./../../database/conection')
const Usuario = require('./../usuario/model/usuario')
const Utils = require('./../../utils/utils')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.login = async (req, callback) => {
    console.log('app.services.loginServices.login');
    try {
        await connectionDb();
        const body = req.body;
        let userDB = await Usuario.findOne({codigoUsuario: body.codigoUsuario})
        if (!userDB) {
            return callback({message: 'USER_NOT_FOUND'});
        }
        if (userDB.is_lock) {
            return callback({message: 'USER_BLOCKED'});
        } else {
            if (!bcrypt.compareSync(body.password, userDB.password)) {
                return callback({
                    message: 'USER_OR_PASSWORD_INCORRECT',
                    status: 401
                })
            }
            let access_token = jwt.sign(
                {
                    user: Utils.simplifyUsuarioForToken(userDB)
                },
                process.env.SEED,
                {expiresIn: process.env.CADUCIDAD_TOKEN}
            )

            let refresh_token = jwt.sign(
                {
                    user: Utils.simplifyUsuarioForToken(userDB)
                },
                process.env.SEED,
                {expiresIn: process.env.CADUCIDAD_REFRESH_TOKEN}
            )
            return callback(null, {
                usuario: Utils.simplifyUsuarioForToken(userDB),
                usr:userDB,
                token: {
                    access_token,
                    refresh_token
                } 
            })
        }
    } catch (error) {
        console.log(error);
        return callback(error.message)
    }
}

