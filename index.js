// import express from 'express';
// import { config } from 'dotenv';
// import cors from 'cors';
// import shopRouter from './routes/shop.js';
// import usersRouter from './routes/users.js';

// config();

// const PORT = process.env.PORT || 6500;
// const app = express();

// app.use(cors({
//     origin: 'http://localhost:8080',
//     credentials: true
// }));
// app.use(express.json());
// app.use(express.static('public'));
// app.use('/shop', shopRouter);
// app.use('/users', usersRouter);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


import express from 'express';
import {productRouter} from './controller/shop.js'
import {usersRouter} from './controller/users.js'
import { config } from 'dotenv'
import cookieparser from 'cookie-parser'
import {errHandling} from './middleware/errorhandling.js'
import cors from 'cors'
import path from 'path'

config();


const app = express()
const port = +process.env.PORT || 6500

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieparser(),
    cors()
)

app.get('^/$|/exampleApp', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/users', usersRouter)
app.use('/shop', productRouter)
app.use(errHandling)

app.listen(port, ()=>{
    console.log(`Server is running on port number: ${port}`);
})






