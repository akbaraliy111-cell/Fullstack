import { createServer } from "http";
import { readFile } from "fs/promises";
import { join } from "path";

async function getUsers() {
    const data = await readFile(join(process.cwd(), "users.json"), "utf-8");
    return JSON.parse(data);
}

const server = createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.method === "GET" && req.url === "/users") {
        const data = await getUsers();
        res.writeHead(200);
        return res.end(JSON.stringify(data));
    } else {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "Not Found" }));
    };
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});