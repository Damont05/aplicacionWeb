const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../configs/config');

function crearToken(usuario){

    const payload = {

        sub: usuario._id,
        iat: moment().unix(),
        exp: moment().add(10, 'days').unix(),
    }

    jwt.encode(payload, config.clave);

}

module.exports = crearToken;
