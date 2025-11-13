const http = require('http');

const server = http.createServer((req, res) => {
    try{
        if(req.url === '/') res.end("Welcome to Home Page");
        else if(req.url === '/about') res.end("Welcome to About Page");
        else res.end("404 Page Not Found");
    } catch(err){
        console.error("Error while creating request:", error);
    }
});

server.listen(8000, () => {console.log("Server is running on port 8000")});
