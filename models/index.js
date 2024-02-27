import { users } from '../models/usersdb.js';
import { products } from '../models/productsdb.js';
import cookieparser from 'cookie-parser';

let users = new users()
let products = new products()

export{
    users,
    products
}