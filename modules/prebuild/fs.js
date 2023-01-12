const fs = require("fs");

//Create and Write File
fs.writeFile("message.txt", "Hello there node", (err)=>{ //(nameOfTheFile,value,call back function)
    if(err){
        throw err;
    }
    console.log("File has been written");
})


//Read File
fs.readFile("./message.txt","utf-8",(err,data)=>{ //(file,encodeing,call back)
    if(err) throw err;
    console.log(data);
} ) 