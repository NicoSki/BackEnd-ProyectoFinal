const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/baseproybackend", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log("la BD de mongo esta conectada"))
    .catch(error => console.log(error))

//corroboro que funcione con el comando node src/daos/carrito/CarritoDaos.js    