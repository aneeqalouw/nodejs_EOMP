import { config } from 'dotenv';
config()
import jwt from 'jsonwebtoken';


const { sign, verify } = jwt;

function createToken(user){
    return sign({
        email: user.email,
        password: user.password
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )

}

function verifyToken(req, res, next){
    const token = req?.headers['Authorization']
    if(token){
        if (verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: 'Incorrect email or password'
            })
        }

    }else{
        res?.json({
            status: res.statusCode,
            msg: 'Please login'
        })
    }
}

export{
    createToken,
    verifyToken
}