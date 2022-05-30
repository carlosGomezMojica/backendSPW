module.exports.simplifyUsuarioForToken = (userDB) => {
    return {
        _id: userDB._id,
        nombre: userDB.nombre || "",
        codigoUsuario: userDB.codigoUsuario
        };
}