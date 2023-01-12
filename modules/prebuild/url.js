const url = require("url");
const address = "https://github.com/Jayzilva?tab=overview&from=2022-12-01&to=2022-12-31";

const parseURL = url.parse(address, true); //first have to parse the URL address with module

console.log(parseURL.host);
console.log(parseURL.pathname);
console.log(parseURL.query.from);
