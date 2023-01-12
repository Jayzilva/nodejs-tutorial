const path = require("path");

//join multiplle paths together
const fileLocation = path.join(__dirname,"../export/app.js"); 
console.log(fileLocation); //app.js file location

const fileName = path.basename(fileLocation);
console.log(fileName); //ge the file base name

console.log(path.extname(fileName)); //etention
