import express from 'express';
import { config } from 'dotenv';
config();

import { connectDB } from './config/db.js';
import router from './router/user.route.js';

const app = express();
const PORT = Number(process.env.PORT_API);

app.use(express.json());

await connectDB();

app.use('/', router)

app.listen(PORT, () => console.log(`Server running on port`, PORT));