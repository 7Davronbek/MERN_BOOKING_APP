import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req, res) => {
    res.send('You are loggin in')
})

router.get('/checkuser/:id', verifyUser, (req, res) => {
    res.send('You are loggin in')
})

// UPDATE
router.put('/:id', updateUser)

// DELETE
router.delete('/:id', deleteUser)

// GET
router.get('/:id', getUser)

// GET ALL
router.get('/', getUsers)

export default router