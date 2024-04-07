const {v4: uuidv4 } = require('uuid')
const User = require('../models/user.model.js')


const getAllUsers= async (req,res) => {
    try {
    const user = await User.find()
    res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneUser = async(req,res) => {
   try {
    const id = req.params.id
    const user =await User.findOne({id: id})
    res.status(200).json(user)
   } catch (error) {
    res.status(404).send(error.message)
   }
}

const createUser = async (req,res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateUser = async (req,res) => {
    try {
        const user = await User.findOne({id: req.params.id})
        user.name = req.body.name
        user.age = Number(req.body.age)
        await user.save()
     
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        await User.deleteOne({id: id})
        res.status(200).json({message: "user is deleted"})
       } catch (error) {
        res.status(404).send(error.message)
       }
}
module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser}