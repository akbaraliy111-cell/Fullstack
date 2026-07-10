import express from 'express';
import { env } from './config/index.js';
import { connectDB } from './config/db.js';
import router from "./router/index.route.js"

const app = express();

app.use(express.json());

await connectDB();

app.use('/api', router);

app.listen(env.PORT, () => console.log('Server listening on port', env.PORT));
