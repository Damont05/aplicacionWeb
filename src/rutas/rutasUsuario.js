const mongoose = require('mongoose');
const Usuario = require('../modelobd/usuarioModelo');
const servicio = require('../servicios/index');



function registro (req, res){ 

    const usuario = new Usuario({

        nombre: req.body.nombre,
        email: req.body.email
    });

    usuario.save((err) => {

        if (err) res.status(500).send({mensaje: `Error al crear el usuario ${err}!`});

        return res.status(200).send({ token: service.createToken(usuario) });

    });

}


function login(res, res){



}

module.exports = {

    registro,
    login
}
