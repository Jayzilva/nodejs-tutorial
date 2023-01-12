const http =require("http");
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'}); //write a header
        res.write("<h1>Welcome to the homepage<h1>");
        res.end();
    }

    if(req.url === '/user'){
        res.write("Welcome to the User");
        res.end();
    }

});

server.listen(3000, ()=>{ 
    console.log("The Server is Running");
}); 
