//a continuacion voy a crear las rutas de los productos y del carrito:

module.exports = app => {
    app.get("/productos", (req, res) => {
        res.send("hola desde productos")
    })

    app.get("/carrito", (req, res) => {
        res.send("hola desde carrito")
    })
}




//vuelvo al index.js