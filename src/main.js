const exprees = require('express');
const {mongoose} = require('./database');
const app = exprees();


app.set('port', process.env.PORT || 3000); 


app.use(exprees.json());



app.use('/api/productos/', require('./rutas/rutasProductos'));



app.listen(app.get('port'), () => {

    console.log(`Servidor escuchando por el puerto ${app.get('port')}!`);
});