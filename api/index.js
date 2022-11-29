import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Database connected');
    } catch (err) {
        throw err
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected');
})

app.get('/', (req, res) => {
    res.send('GET METHOD')
})

// MIDDLEWARES
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(5000, () => {
    console.log('Backend is running');
    connect()
})