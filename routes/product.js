const express= require('express');
const router =express.Router();

const createProduct =require('../controller/productcontroller');
const getAllProducts=require('../controller/productcontroller');
const updateProduct= require('../controller/productcontroller');
const getProduct = require('../controller/productcontroller');
const deleteProducts =require('../controller/productcontroller');
const deleteAllProducts =require('../controller/productcontroller');



router.post('/products', createProduct);
router.get('/getpro',getAllProducts);
router.get('/update/:id', updateProduct);
router.get('/getpro/:id',getProduct);
router.delete('/delete/:id',deleteProducts);
router.delete('/deletepro',deleteAllProducts);



module.exports =router;