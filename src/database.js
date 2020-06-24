const mongoose = require('mongoose');
const uri = 'mongodb://localhost/producto';

mongoose.connect(uri)
    .then(db => console.log('------->Base de datos CONECTADA<-------'))
    .catch(err => console.error(err));


module.exports = mongoose;