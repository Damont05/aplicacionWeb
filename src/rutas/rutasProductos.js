const express = require('express');
const router = express.Router();
const Producto = require('../modelobd/productosModelo')


router.get('/', async(req,res) => {

    const producto = await Producto.find();
    res.json(producto);
    
});

router.get('/:id', async(req,res) => {

    const producto = await Producto.findById(req.params.id);
    res.json(producto);


});

router.post('/', async(req,res) => {

    const producto = new Producto(req.body);
    await producto.save();
    res.json('Producto Guardado en la base de datos');

});

router.put('/:id', async(req,res) => {

    const {id} = req.params;
    const producto = {

        nombre:      req.body.nombre,
        img   :      req.body.img,
        precio:      req.body.precio,
        categoria:   req.body.categoria,
        descripcion: req.body.descripcion
    };

    await Producto.findByIdAndUpdate(id, {$set:producto}, {new:true});
    res.json('Se ha actualizado con exito el producto');


});

router.delete('/:id', async(req,res) => {

    const producto = await Producto.findByIdAndRemove(req.params.id);
    res.json('Se ha eliminado un producto');

});



module.exports = router;