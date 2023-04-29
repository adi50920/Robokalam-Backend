import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import router from './routes/Router.js'
app.use(express.json())
import cors from 'cors'
app.use(cors())

const PORT = process.env.PORT || 8001

try {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to MongoDB')
} catch (error) {
  console.log(error)
}

app.use('/user', router)

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`)
})
