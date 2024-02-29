import {usersRouter, express} from './controller/users.js';
import {productsRouter} from './controller/shop.js'
import cookieparser from 'cookie-parser'
import {errHandling} from './middleware/errorhandling.js'
import cors from 'cors'
import path from 'path'


const app = express()
const port = +process.env.PORT || 3500

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
    express.static('./public'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieparser(),
    cors()
)

app.get('^/$|/altitudeapparel', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './static/index.html'))
})


app.use('/users', usersRouter)
app.use('/shop', productsRouter)
app.use(errHandling)

app.listen(port, ()=>{
    console.log(`Server is running on port number: ${port}`);
})







