import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import shopRouter from './routes/shop.js';
import usersRouter from './routes/users.js';

config();

const PORT = process.env.PORT || 6500;
const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/shop', shopRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
