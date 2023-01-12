//Epoert Multiple Functions
const sayName = ()=>{
    console.log("My Name");
}

const sayAddress = ()=>{
    console.log("My Location");
}

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
