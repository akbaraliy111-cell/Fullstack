import http from 'http';
import { getData } from "../helpers/file-data.js"

const server = http.createServer( async (req, res) => { 
    res.setHeader('Content-type', 'application/json')
    if (req.url === '/users' && req.method === "GET"){
        const users = await getData();
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }
});

server.listen(3000, () => {
    console.log(`server is running`);
    
});