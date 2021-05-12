const router = require('express').Router();

const  {addUser, readUser, updateUser, deleteUser}= require('./controller');

const authorized = require('../users/middle')

router.post('/user',authorized.middle ,addUser) // Create User
router.get('/user/all', readUser) // Read User
router.put('/user/:id', updateUser) //Update User
router.delete('/user/:id', deleteUser)// Delete User

module.exports = router;