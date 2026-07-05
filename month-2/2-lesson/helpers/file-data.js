import { readFile } from "fs/promises";
import { join } from "path";

const fileName = join(process.cwd(), "data/users.json");

export async function getData(){
    const users = await readFile(fileName, "utf-8");
    return JSON.parse(users);
};