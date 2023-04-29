import mongoose from 'mongoose'
import User from '../schema/model.js'
import bcrypt from 'bcrypt'

const getAllUser = async (req, res) => {
  try {
    const response = await User.find()
    return res.send(response)
  } catch (err) {
    console.error(err)
    res.status(400).json({ type: 'error', message: err.message })
  }
}

const addUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      name,
      email,
      age,
      password: hashPassword,
    })
    console.log(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    console.log(error)
  }
}

export { getAllUser, addUser }
