import { connect } from "mongoose";
import { env } from './index.js';

export async function connectDB() {
    try {
        await connect(env.MONGO_URI);
        console.log('Database connected');
    } catch (error) {
        console.error('Error on connecting database', error);
    }
}
