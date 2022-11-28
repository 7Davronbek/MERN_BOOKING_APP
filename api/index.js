import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
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

app.listen(5000, () => {
    console.log('Backend is running');
    connect()
})