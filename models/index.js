import { Users } from '../models/usersdb.js';
import { Products } from '../models/productsdb.js';
// import cookieparser from 'cookie-parser';

let users = new Users()
let products = new Products()

export{
    users,
    products
}