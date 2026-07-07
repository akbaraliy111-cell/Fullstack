import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

export async function connectDB(){
    try {
        await connect(process.env.MONGO_URI);
        console.log(`database connected`);
        
    } catch (err) {
        console.log(`Error on connecting to the database: `, err);
    }
}