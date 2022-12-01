import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// ? VERIFY
// router.get('/checkauthentication', verifyToken, (req, res) => {
//     res.send('You are loggin in')
// })

// router.get('/checkuser/:id', verifyUser, (req, res) => {
//     res.send('You are logged in! You can delete account ')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res) => {
//     res.send('You are logged in! You can delete all accounts ')
// })


// UPDATE
router.put('/:id', verifyUser, updateUser)

// DELETE
router.delete('/:id', verifyUser, deleteUser)

// GET
router.get('/:id', verifyUser, getUser)

// GET ALL
router.get('/', verifyAdmin, getUsers)

export default router