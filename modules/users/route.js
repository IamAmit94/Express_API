const router = require('express').Router();

const  {addUser, readUser, updateUser, deleteUser}= require('./controller');

router.post('/user',addUser) // Create User
router.get('/user/all', readUser) // Read User
router.put('/user/:id', updateUser) //Update User
router.delete('/user/:id', deleteUser)// Delete User

module.exports = router;