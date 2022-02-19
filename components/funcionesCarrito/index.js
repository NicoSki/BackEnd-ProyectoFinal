//1ro agrego las variables necesarias
const express = require("express");
const app = express();


//2do declaro los use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//3ro a modo figurativo creo algunos productos
let carrito = [
    { Articulo: "Carrito1" },
    { Articulo: "Carrito2" },
    { Articulo: "Carrito3" },
    { Articulo: "Carrito4" },
    { Articulo: "Carrito5" },
];

//agrego algunos productos para hacer funcionar el ultimo delete
let productos = [
    { Articulo: "Remera1" },
    { Articulo: "Remera2" },
    { Articulo: "Remera3" },
    { Articulo: "Remera4" },
    { Articulo: "Remera5" },
]

//4to creo la direccion del get
app.get("/api/carrito", (req, res) => {
    res.json(carrito)
})

app.get("/api/carrito/:id/productos", (req, res) => {
    let { id } = req.params;

    if (Number(id) > carrito.length || Number(id) < 1) {
        respuesta = "No agregaste nada al carrito"
    } else {
        respuesta = carrito
    }
    res.json(respuesta)
})




//5to creo las direcciones y logicas del post/delete

app.post("/api/carrito/:id/productos", (req, res) => {
    let carro = req.body;
    carrito.push(carro)
    res.json({
        "agregaste": carro,
        "posicion": carrito.length
    })
})





//vaciar el carrito:
app.delete("/api/carrito/:id", (req, res) => {
    let { id } = req.params;
    let respuesta = null;
    if (Number(id)) {
        carrito = []
        respuesta = "Vaciaste el carrito";
    } else {
        respuesta = "Ingresa un numero en la url"
    }
    res.json(respuesta)
});


//eliminar particular:
app.delete("/api/carrito/:id/productos/:id_prod", (req, res) => {
    //este es para el carrito
    let { id } = req.params;
    //este es para el producto
    let { id_prod } = req.params;

    let posicion_final = Number(id) - 1;
    let posicion_final1 = Number(id_prod) - 1;


    //logica que elimina del carrito:
    carrito.splice(posicion_final, 1);

    //logica que elimina del producto:
    productos.splice(posicion_final1, 1);

    res.json({
        "Carrito": `Eliminaste el ${carrito[posicion_final]}`,
        "Producto": `Eliminaste el ${carrito[posicion_final1]}`
    })
});


