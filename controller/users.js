// import  { createUser, getUsers, getUserById, updateUser, deleteUsers}  from '../models/usersdb.js';

// const getMany = async (req, res) => {
//   try {
//     const users = await getUsers();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
//  const addUser = async (req,res)=>{
//   const {firstName, lastName, age, email, password} = req.body
//   const post =  await postUser(firstName, lastName, age, email, password)
//   res.send(await getUsers())
// }
// const deleteUsers =async (req,res)=>{
//   await deleteUsers(req.params.userID)
//   res.json(await getUsers())
// }
//  const editUser = async (req,res)=>{
//   let {firstName, lastName, age, email, password} = req.body
//   firstName ? firstName=firstName : {firstName}=user
//   lastName ? lastName=lastName : {lastName}=user
//   age ? age=age : {age}=user
//   email ? email=email : {email}=user
//   password ? password=password : {password}=user
//   const edit = await updateUser(firstName, lastName, age, email, password, category,+req.params.userID)
//   res.json(await getUsers())
// };

// export default { getMany,editUser, deleteUsers,addUser };


// import { getUsers, postUsers, deleteUsers, updateUsers } from '../models/usersdb.js';

// const getMany = async (req, res) => {
//   try {
//     const users = await getUsers();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// const addUser = async (req, res) => {
//   const { firstName, lastName, age, email, password } = req.body;
//   try {
//     const newUser = await createUser({ firstName, lastName, age, email, password });
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error adding user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// // const deleteUser = async (req, res) => {
// //   const userID = req.params.userID;
// //   try {
// //     await deleteUser(userID);
// //     const users = await getUsers();
// //     res.json(users);
// //   } catch (error) {
// //     console.error('Error deleting user:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // }

// const editUser = async (req, res) => {
//   const userID = req.params.userID;
//   let { firstName, lastName, age, email, password } = req.body;
// }

// export default { getMany, editUser, addUser };



// import { getUsers, postUsers, deleteUsers, updateUsers  } from '../models/usersdb.js';

// const getManyUsers = async (req, res) => {
//   try {
//     const users = await getUsers();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// const addUser = async (req, res) => {
//   const { firstName, lastName, age, email, password } = req.body;
//   try {
//     const newUser = await postUsers({ firstName, lastName, age, email, password });
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error adding user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// const editUser = async (req, res) => {
//   const userID = req.params.userID;
//   const { firstName, lastName, age, email, password } = req.body;

//   try {
//     const updatedUserData = {
//       firstName,
//       lastName,
//       age,
//       email,
//       password
//     };

//     const updatedUser = await updateUsers(userID, updatedUserData);
//     res.json(updatedUser);
//   } catch (error) {
//     console.error('Error updating users:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// export default { getManyUsers, editUser, addUser };


import bodyParser from 'body-parser';
import { verifyToken } from '../middleware/userAuthenticate.js';
import { users } from '../models/usersdb.js';
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

usersRouter.get('/:id', (req, res)=>{
    try{
        users.fetchUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve user'
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

usersRouter.patch('/updateUser/:id', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update'
        })
    }
})

usersRouter.delete('/deleteUser/:id', (req, res)=>{
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

