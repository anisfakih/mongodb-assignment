const exoress= require('express');
const router=exoress.Router();
const signup= require('../controller/usercontroller');
const login= require('../controller/usercontroller');
const getUser = require('../controller/usercontroller');
const updateUser = require('../controller/usercontroller');
const getAllUsers =require('../controller/usercontroller');
const deleteUser =require('../controller/usercontroller');
const deleteAllUsers = require('../controller/usercontroller');



router.get("/:id",getUser);
router.post('/signup',signup);
router.post('/login',login);
router.put('/update/:id',updateUser);
router.get('/getAll',getAllUsers);
router.delete('/delete/:id',deleteUser);
router.delete('/delete',deleteAllUsers);

module.exports=router;