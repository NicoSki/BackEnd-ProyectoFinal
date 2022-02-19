//Comienzo mi proyecto creando el package.json
//luego voy a instalar todas las librerias que voy a utilizar a lo largo del proyecto, entre ellas:
// cors,dotenv,express,nodemon, moment,
//voy a seguir el orden que se establece en la explicacion de la entrega
//creo la carpeta routes y dentro el index.js

//creo el archivo ".env" y declaro el puerto, en este caso el 8080
//lugo creo la carpeta config y dentro un archivo index.js donde voy utilizar dotenv

//creo lo necesario para darle funcionamiento al servidor:
const express = require("express");
const app = express();

//importo el config:
let { config } = require("./config");

//para acceder al index.js de las rutas:
let servidorRoutes = require("./routes");
//luego lo comunico con el index:
servidorRoutes(app);



//todo funciona asi que paso al '/api/productos':
//voy a crear la carpeta components y dentro de esta otra carpeta llamada funcionesProducto detro un archivo index.js que va a hacer referencia al las distintas acciones con un producto:
//luego voy a hacer lo mismo pero para el carrito

//ya teniendo las logicas del carrito y de los productos paso a crear el sitio principal:
//creo la carpeta public y dentro de ella un index.html y lo conecto mediante app.use
app.use(express.static("public"));

//luego de crear el html principal con sus estilos, creo una carpeta que se llama principal y almaceno los estilos/js

//ahora a modo de pruba voy a crear la plantilla de las remeras como plantea el desafio del proyecto:
//dentro de la carpeta public creo un archivo llamado remeras.html y una carpeta llamada remeras donde se van a almacenar sus estilos:
//no es necesario crear la ruta ya que esta dentro de public(el boton ver mas redirecciona al sitio)

//luego de crear las remeras figurativas voy a agregarles un link que me lleva a la apg principal
//ahora paso a los detalles de las remeras: nuevamente lo hago en una sola en particular a modo de prueba
//creo en la carpeta public un archivo llamado detalle.html y su respectiva carpeta de estilos

//creo el listen del servidor:
app.listen(config.port, error => {
    console.log(`Servidor en http://localhost:${config.port}`);
})

