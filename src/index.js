//Instalo el package.json y las librerias que voy a utilizar en mi proyecto
//Inicio mi proyecto con las variables principales:
const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const app = express();
let { config } = require("./config");
let { productos } = require("./utils/arrayDeLosProductos.js");
let { arrayCamisas, arrayPantalones, arrayZapatillas, arrayRemeras } = require("./components/Productos");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

//luego creo las carpetas que voy a utilizar en el proyecto:
//defino las distintas secciones que dividen mi proyecto:

//luego de crear las estructuras de mis secciones y definir sus rutas, voy a comenzar a mostrar mis productos en las respectivas secciones, por medio de la carpeta categorias en views
//ahora creo mis bases de datos y las agrego tanto en config como en este index, voy a crear la carpeta DAOs y voy a usar firebase para almacenar los productos y mongo(con la ayuda de mongoose) para las acciones del carrito(CRUD)

//luego de crear la base de datos de los productos, creo las secciones de mi pag, es decir, mustro los productos en sus respectivas cartas
//ahora paso a la base de datos del carrito, la cual la voy a hacer con mongoDB y crearle su modelo en la carpeta models



//Base de Mongo:
require("./base_datosMG");

//Utilidades de passport
require("./passport/auth_local");

//Settings
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', engine);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'quiksilverapp',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Uso flash para enviar mensajes en caso de errores en los formularios:
app.use((req, res, next) => {
    app.locals.mensajeDeRegistro = req.flash("mensajeDeRegistro");
    app.locals.mensajeDeError = req.flash("mensajeDeError");
    app.locals.mensajeDeIngreso = req.flash("mensajeDeIngreso");
    next();
});

//Global variables
//Esto me va a servir para volcar mis productos en las categorias
app.use((req, res, next) => {
    res.locals.productos = productos;
    res.locals.arrayCamisas = arrayCamisas;
    res.locals.arrayPantalones = arrayPantalones;
    res.locals.arrayZapatillas = arrayZapatillas;
    res.locals.arrayRemeras = arrayRemeras;
    next();
});


//Routes
app.use("/", require("./routes/index"));



//creo el archivo .env para el puerto
app.listen(config.port, () => {
    console.log(`server on http://localhost:${config.port}`);
})