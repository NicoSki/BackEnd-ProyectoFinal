//Instalo el package.json y las librerias que voy a utilizar en mi proyecto
//Inicio mi proyecto con las variables principales:
const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const app = express();
let { config } = require("./config");
let { productos } = require("./utils/arrayDeLosProductos.js");
let { arrayCamisas, arrayPantalones, arrayZapatillas, arrayRemeras } = require("./components/Productos");
const ProdSchema = require("./models/modeloProducto");

//luego creo las carpetas que voy a utilizar en el proyecto:
//defino las distintas secciones que dividen mi proyecto:

//luego de crear las estructuras de mis secciones y definir sus rutas, voy a comenzar a mostrar mis productos en las respectivas secciones, por medio de la carpeta categorias en views
//ahora creo mis bases de datos y las agrego tanto en config como en este index, voy a crear la carpeta DAOs y voy a usar firebase para almacenar los productos y mongo(con la ayuda de mongoose) para las acciones del carrito(CRUD)

//luego de crear la base de datos de los productos, creo las secciones de mi pag, es decir, mustro los productos en sus respectivas cartas
//ahora paso a la base de datos del carrito, la cual la voy a hacer con mongoDB y crearle su modelo en la carpeta models


//por el momento, la db de mongoose no la voy a usar, la voy a comenzar a utilizr a la hora de enviar una peticion de un formulario, pero a modo de prueba voy a agregar un producto random:
//llamo a la bd de mongo:
require("./daos/carrito/CarritoDaos");
(async ()=>{
    try {
        const random = new ProdSchema({
            title:"producto",
            price:"900",
            size:"42",
            img:"#"
        })
        await random.save()
        console.log(random)
    } catch (error) {
        console.log(error);
    }
})();
//esto funciona ya que abro una nueva terminal y pongo el comando mongo, no solo me crea la BD llamada "baseproybackend" sino que al buscar la coleccion, esta me devuelve "prodschemas" y lo declarado en la fucion ifi   




//Settings
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', engine);
app.set("view engine", "ejs");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Global variables
//Esto me va a servir para volcar mis productos en las categorias
app.use((req, res, next) => {
    res.locals.productos = productos;
    res.locals.arrayCamisas = arrayCamisas;
    res.locals.arrayPantalones = arrayPantalones;
    res.locals.arrayZapatillas = arrayZapatillas;
    res.locals.arrayRemeras =arrayRemeras;
    next();
});

//Routes
app.use("/", require("./routes/index"));



//creo el archivo .env para el puerto
app.listen(config.port, () => {
    console.log(`server on http://localhost:${config.port}`);
})