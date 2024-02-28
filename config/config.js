import { createPool } from 'mysql';
import 'dotenv/config'

const connection = createPool({
    host: process.env.DB_host,
    database: process.env.DB_database,
    user: process.env.DB_user,
    password: process.env.DB_password,
    multipleStatements: true,
    connectionLimit: 30
})
export{
    connection
}
