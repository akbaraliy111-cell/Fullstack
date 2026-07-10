import { config } from "dotenv";
config();

export const env = {
    PORT: Number(process.env.API_PORT),
    MONGO_URI: String(process.env.MONGO_URI)
};
