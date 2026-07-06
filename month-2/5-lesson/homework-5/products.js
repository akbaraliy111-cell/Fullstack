import { createServer } from 'http';
import { getData, setData } from './func.js';

const PORT = 3000;

createServer(async (req, res) => {
    try {
        res.setHeader(`Content-type`, `application/json`);
        const data = await getData();

        // create
        if (req.method === 'POST' && req.url === '/products') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', async () => {
                const product = {
                    id: data.length ? data.at(-1).id + 1 : 1,
                    ...JSON.parse(body)
                };
                data.push(product);
                await setData(data);
                return res.writeHead(201).end(JSON.stringify(product));
            });
        }
        // read
        else if (req.method === 'GET' && req.url === '/products') {
            return res.writeHead(200).end(JSON.stringify(data));
        }
        // update
        else if (req.method === 'PUT' && req.url.startsWith(`/products`)) {
            const id = req.url.split('/')[2];
            const index = data.findIndex(el => el.id )


        }
        // delete
        else if (req.method === 'DELETE' && req.url === '/products') {

        }


        else {
            return res.writeHead(404).end(JSON.stringify({ message: "Page not found" }));
        }

    } catch (error) {
        console.log(error);
        return res.end(JSON.stringify({
            message: error.message
        }));
    }
}).listen(PORT, () => console.log(`Server running on ${PORT} port`));