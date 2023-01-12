const http =require("http");
const path = require("path");
const fs =  require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"index.html"), (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'}); //write a header
            res.write(data);
            res.end();
        });

    }

});

server.listen(3000, ()=>{ 
    console.log("The Server is Running");
}); 
