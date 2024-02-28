import bodyParser from 'body-parser';
import { verifyToken } from '../middleware/userAuthenticate.js';
import { users } from '../models/index.js';
import express from 'express'


const usersRouter = express.Router()


usersRouter.get('/', (req, res)=>{
    try{
      users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})


usersRouter.post('/register', bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'There was an error signing up'
        })
    }
})

usersRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update'
        })
    }
})

usersRouter.delete('/delete/:id', (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete user'
        })
    }
})

usersRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'There was an error logging in'
        })
    }
})


export {
    usersRouter,
    express
}

