{/*const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db=mongoose.connect("mongodb://localhost:27017/assignment")
.then(res=>console.log('connection success'))
.catch(e=>console.log(e))
module.exports = db*/}

const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Backend');
    mongoose.connection.on('connected', () => console.log('Connected'));
    mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
}

module.exports = connectDB