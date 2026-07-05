import { createServer } from 'http';
import { getData, addData } from './file.js';

const PORT = 3000;

createServer(async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json');
        const users = await getData();

        if (req.method === 'GET' && req.url === '/users') {
            return res.writeHead(200).end(JSON.stringify(users));
        }

        if (req.method === 'POST' && req.url === '/users') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', async () => {
                const newUser = {
                    id: users ? users.at(-1)?.id + 1 : 1,
                    ...JSON.parse(body)
                };
                users.push(newUser);
                await addData(users);
                return res.writeHead(201).end(JSON.stringify(users))
            });
        }

        if (req.method === "PUT" && req.url.startsWith('/users')) {
            const id = req.url.split('/')[2];
            const index = users.findIndex(el => el.id == id);
            if (index === -1) {
                return res.writeHead(404).end(JSON.stringify({
                    message: 'User id not found'
                }))
            }
            let body = ''
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
                users[index] = {id, ...JSON.parse(body)};
                await addData(users);
                return res.writeHead(200).end(JSON.stringify(users[index]));
            });

        }

        if (req.method === 'DELETE' && req.url.startsWith('/users')){
            const id = Number(req.url.split('/')[2]);
            const index = users.findIndex(el => el.id === id);
            if (index === -1) {
                return res.writeHead(404).end(JSON.stringify({
                    message: 'User id not found'
                }));
            } else {
                users.splice(index, 1);
                await addData(users);
                return res.writeHead(200).end(JSON.stringify({ message: 'user deleted' }))
            }
        }

        else {
            return res.writeHead(404).end(JSON.stringify({
                message: 'Page not found'
            }));
        }


    } catch (error) {
        console.log(error);
        return res.end(JSON.stringify({
            message: error.message
        }));
    }

}).listen(PORT, () => console.log(`Server running on port`, PORT));