//1ro agrego las variables necesarias
const express = require("express");
const app = express();
const moment = require("moment");


//2do declaro los use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//3ro a modo figurativo creo algunos productos
let productos = [
    { img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/146/110/products/quiksilver-9973-073875-1-product1-44b0abda7a2dd8506f16222233679159-640-0.jpg", titulo: "Remera1"},
    { img: "https://static.dafiti.com.ar/p/quiksilver-9454-876658-1-product.jpg", titulo: "Remera2"},
    { img: "https://kingofkings.com.ar/store/wp-content/uploads/2020/10/remera-mc-modern-legends-44888.jpg", titulo: "Remera3"},
    { img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/130/753/products/13a588b7-2423-49b4-a264-8c81cc074cb91-fe7977a03c2e032f2815995357827071-480-0.jpeg", titulo: "Remera4"},
];

//4to creo la direccion del get
app.get("/api/productos", (req, res) => {
    res.json(productos)
})

app.get("/api/productos/:id", (req, res) => {
    let { id } = req.params;
    let id_verdadero = Number(id) - 1;
    let respuesta = null;

    if (Number(id) > productos.length || Number(id) < 1) {
        respuesta = "No se encontro ese producto"
    } else {
        respuesta = productos[id_verdadero]
    }
    res.json(respuesta)
})




//5to creo las direcciones y logicas del post/put/delete

app.post("/api/productos", (req, res) => {
    let producto = req.body;
    productos.push(producto)
    res.json({
        "agregaste": {producto, Fecha: moment().format("LLLL")},
        "posicion": productos.length
    })
})




app.put("/api/productos/:id", (req, res) => {
    let { id } = req.params;
    let modificado = req.body;

    let posicion_final = Number(id) - 1;
    let anterior = productos[posicion_final];
    productos.splice(posicion_final, 1, modificado);
    res.json({
        "actualizada": modificado,
        anterior,
    })
});



app.delete("/api/productos/:id", (req, res) => {
    let { id } = req.params;
    let posicion_final = Number(id) - 1;
    productos.splice(posicion_final, 1);
    res.json({
        "Eliminaste": productos[posicion_final]
    })
});

app.listen(config.port, error => {
    console.log(`Servidor en http://localhost:${config.port}`);
})
