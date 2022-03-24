//declaro el config y el uso de dotenv:

require("dotenv").config();

//llamo al puerto, del archivo .env:
let config = {
    port: process.env.PORT 
}

//ahora lo exporto:
module.exports = { config };
