const express = require('express')
const {getAllUsers, getOneUser, createUser, deleteUser, updateUser} = require('../controller/user.controller')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.get('/delete/:id', deleteUser)
router.post('/', createUser)
router.patch('/update/:id', updateUser)


module.exports = router