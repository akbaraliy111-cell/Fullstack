import { join }  from 'path';
import { readFile, writeFile }  from 'fs/promises';

const filePath = join(process.cwd(), 'users.json');

export async function getData(){
    try{
        const data = await readFile(filePath, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error){
        console.log(`error on get Data:`, error);
    }
};

export async function addData(data) {
    try{
        await writeFile(filePath, JSON.stringify(data, null, 2));
    } catch( error) {
        console.log('Error on add Data:', error)
    }
}