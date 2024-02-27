// import { pool } from '../config/config.js';

// const getUsers = async () => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');
//     return rows;
//   } catch (error) {
//     throw new Error(`Error fetching products: ${error.message}`);
//   }
// };

// const postUsers = async (firstName, lastName, age, email, password) => {
//   try {
//     await pool.query('INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, age, email, password]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error adding users: ${error.message}`);
//   }
// };

// const deleteUsers = async (userID) => {
//   try {
//     await pool.query('DELETE FROM users WHERE userID = ?', [userID]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error deleting users: ${error.message}`);
//   }
// };

// const updateUsers = async (firstName, lastName, age, email, password) => {
//   try {
//     await pool.query('UPDATE users SET userID = ?, firstName = ?, lastName = ?, age = ?, email = ?, password = ? WHERE userID = ?', [firstName, lastName, age, email, password]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error updating users: ${error.message}`);
//   }
// };


// export { getUsers, postUsers, deleteUsers, updateUsers };


import { connection as db } from '../config/config.js';
import {hash, compare} from 'bcrypt'
import { createToken } from '../middleware/userAuthenticate.js';
class users{
    fetchUsers(req, res){
        const qry = `
            SELECT firstName, lastName, age, email, password
            FROM users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const qry = `
            SELECT firstName, lastName, age, email, password
            FROM users
            WHERE userID =${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    async createUser(req,res){
        let data = req.body
        data.password = await hash(data?.userPwd, 8)
        let user = {
            email: data.email,
            password: data.password
        }
        const qry = `
            INSERT INTO users
            SET ?;
        `
        db.query(qry, [data], (err)=>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: 'Email address already in use'
                })
                console.log(err);
            }else{
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'Successfully signed up!'
                })
            }
        })
    }
    async updateUser(req, res){
        let data = req.body
        if(data?.password){
            data.password = await hash(data?.password, 8)
        }
        const qry = `
            UPDATE users
            SET ?
            WHERE userID = ${req.params.id};
        `
        db.query(qry, [data], (err)=>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: "Failed to update"
                })
            }else{
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully updated'
                })
            }
        })
    }
    async deleteUser(req, res){
        const qry = `
            DELETE FROM users
            WHERE userID = ${req.params.id}
        `
        db.query(qry, (err)=>{
            if (err){
                res.json({
                    status: res.statusCode,
                    msg: 'Failed to delete user'
                })
            }else{
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully deleted'
                })
            }
        })
    }
    login(req, res){
        const {email, password} = req.body
        const qry = `
            SELECT firstName, lastName, age, email, password
            FROM users
            WHERE email = '${email}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: 'You provided the wrong email address'
                })
            }else{
                const validPassword = await compare(password, result[0].password)
                if(validPassword){
                    const token = createToken({
                        email,
                        password
                    })
                    res.json({
                        status: res.statusCode,
                        msg: 'Welcome back!',
                        token,
                        result: result[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: 'Incorrect password'
                    })
                }
            }
        })
    }
}
export{
    users
}
  

