const mongoose = require("mongoose");
//Del archivo .env traigo la url de mongo
//Para chequear que funcione, abro una nueva terminal y ejecuto el comando "mongo" y luego ingreso a la url "http://localhost:27017"
//Todo funciona correctamente

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true
})
    .then(db => console.log("La BD de mongo esta conectada"))
    .catch(err => console.log(err));

//Ahora agrego la conexion de la bd al index pricipal del proyecto  
//Luego voy a la carpeta de models para crear las estructuras de los usuarios