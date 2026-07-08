import express from 'express';

import { env } from './config/index.js'
import { connectDB } from './config/db.js'
import authorRouter from './router/author.route.js'
import bookRouter from './router/book.route.js'


const app = express();

app.use(express.json());

await connectDB();

app.use('/author', authorRouter)
app.use('/book', bookRouter)

app.listen(env.PORT, () => console.log(`Server run on port: ${env.PORT}`));