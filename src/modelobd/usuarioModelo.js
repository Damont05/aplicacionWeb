const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

const esquemaUsuario = new Schema({

    nombre:       {type: String, required: true},
    //unique: para que solo haya un correo unitario en la base de datos
    email:        {type: String, unique: true, lowercase: true},
    //select: false para cuando haga un get a un usuario no me muestre el password por seguridad
    password:     {type: String, select:false},
    //date.now() para que me muestre la fecha que ingreso el usuario
    fechaIngreso: {type: Date, default: Date.now()}
});





module.exports = mongoose.model('Usuario', esquemaUsuario);