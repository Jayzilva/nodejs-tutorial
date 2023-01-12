const http =require("http");
const server = http.createServer((req,res)=>{
    console.log(req);
    //making a response when someone access this 
    res.write("Hello Users");
    res.end();//close the response

});

//After create a server can listen to request that made to server
server.listen(3000, ()=>{ //define a port that listen to
    //making this callback function to listen to see the server actually sartup
    console.log("The Server is Running");
}); 






