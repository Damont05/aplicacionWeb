const mongoose = require('mongoose');
const {Schema} = mongoose;

const esquemaProductos = new Schema({

    nombre:      {type: String, required: true},
    img:         {type: String, required: true},
    precio:      {type: Number, default: 0},
    categoria:   {type: String, enum: ['computadoras', 'telefonos', 'electrodomesticos']},
    descripcion: {type: String, required:true}

}); 

module.exports = mongoose.model('Productos', esquemaProductos);