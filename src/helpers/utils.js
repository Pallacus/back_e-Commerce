const jwt = require('jsonwebtoken');

const createToken = (user) => {
    //el token es un objeto de datos codificados
    const obj = {
        id: user.id,
        role: user.role
    }

    return jwt.sign(obj, process.env.SECRET_KEY);

}

module.exports = {
    createToken
};