//declaro el config y el uso de dotenv:

require("dotenv").config();

//llamo al puerto, del archivo .env:
let config = {
    port: process.env.PORT,
    mongo_db: process.env.MONGO_DB 
}

//ahora lo exporto:
module.exports = { config };
