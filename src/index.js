//Instalo el package.json y las librerias que voy a utilizar en mi proyecto
//Inicio mi proyecto con las variables principales:
const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const app = express();
let { config } = require("./config");
let { productos } = require("./components/temporal.js");

//luego creo las carpetas que voy a utilizar en el proyecto:
//defino las distintas secciones que dividen mi proyecto:

//luego de crear las estructuras de mis secciones y definir sus rutas, voy a comenzar a mostrar mis productos en las respectivas secciones, por medio de la carpeta categorias en views
//ahora creo mis bases de datos y las agrego tanto en config como en este index, voy a crear la carpeta DAOs y voy a usar firebase para almacenar los productos y mongo(con la ayuda de mongoose) para las acciones del carrito(CRUD)


//Settings
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', engine);
app.set("view engine", "ejs");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Global variables
//Esto me va a servir para volcar mis productos en las categorias
app.use((req,res,next)=>{
    res.locals.productos = productos;
    next();
});

//Routes
app.use("/", require("./routes/index"));



//creo el archivo .env para el puerto
app.listen(config.port, () => {
    console.log(`server on http://localhost:${config.port}`);
})