// import mysql from 'mysql2';
// import { config } from 'dotenv';

// config();

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// }).promise();

// export { pool };

import { createPool } from 'mysql2';
import { config } from 'dotenv';

config()

const connection = createPool({
    DB_host: process.env.DB_host,
    DB_database: process.env.DB_database,
    DB_user: process.env.DB_user,
    DB_password: process.env.DB_password,
    multipleStatements: true,
    connectionLimit: 30
})
export{
    connection
}
