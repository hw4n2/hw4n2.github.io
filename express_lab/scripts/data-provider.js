const path = require("path"); 
const fs = require("fs"); 


const file = process.env.DATAFILE;
// for now, we will get our data by reading the provided json file 
const jsonPath = path.join(__dirname, '../data', file ); 
const jsonData = fs.readFileSync(jsonPath, 'utf8'); 
// convert string data into JSON object 
const stocks = JSON.parse(jsonData); 

module.exports = stocks;