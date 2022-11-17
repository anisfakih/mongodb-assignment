const { urlencoded, json } = require('body-parser');
const express=require('express');
const dotenv = require('dotenv');
const connectDB = require('./database');
const UserRoute= require('./routes/user.js');
const ProductRoute= require('./routes/product.js');

dotenv.config({path:'.env'});


connectDB();


const app=express();

app.use(urlencoded({extended:true}));
app.use(json())

app.use("/",UserRoute);
app.use("/pro",ProductRoute);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`listening at port ${port || 8000}`);
});