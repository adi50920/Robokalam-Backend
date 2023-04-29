import mongoose from 'mongoose'

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    match: [
      /^[a-zA-Z ]+$/,
      (props) => {
        console.log(`${props.value} is not a valid name`)
      },
    ],
    required: [true, 'Please enter a name'],
  },
  email: {
    type: String,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
      (props) => `${props.value} is not a valid email`,
    ],
  },
  age: {
    type: Number,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
})

const User = mongoose.model('user', FormSchema)
export default User
