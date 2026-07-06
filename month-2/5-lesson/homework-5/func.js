import { join } from 'path';
import { writeFile, readFile } from 'fs/promises';

const filePath = join(process.cwd(), 'products.json');

export async function getData() {
    try {
        const data = await readFile(filePath, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(`Error on read json-file: `, error);
    };
};

export async function setData(data) {
    try {
        await writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.log(`Error on write json-file:`, error);
    };
};