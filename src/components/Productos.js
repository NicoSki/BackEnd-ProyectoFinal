//Aca voy a agregar los todos los productos de mi pag, remeras,camisas,zapatillas y pantalones

let { db: baseFirebase } = require("../daos/productos/ProductosDaos.js");

(async () => {
    try {
        let arrayDeProductos = [
            { titulo: "Remera1", link: "/api/productos/remeras", precio: 1500, stock: 200, categoria: "remeras", img: "https://static.dafiti.com.ar/p/quiksilver-5423-581264-1-product.jpg" },
            { titulo: "Remera2", link: "/api/productos/remeras", precio: 2000, stock: 150, categoria: "remeras", img: "https://static.dafiti.com.ar/p/quiksilver-4922-732853-1-product.jpg" },
            { titulo: "Remera3", link: "/api/productos/remeras", precio: 1700, stock: 100, categoria: "remeras", img: "https://static.dafiti.com.ar/p/quiksilver-0434-588994-1-product.jpg" },
            { titulo: "Remera4", link: "/api/productos/remeras", precio: 1000, stock: 170, categoria: "remeras", img: "https://static.dafiti.com.ar/p/quiksilver-5841-045375-1-product.jpg" },
            { titulo: "Camisa1", link: "/api/productos/camisas", precio: 3000, stock: 300, categoria: "camisas", img: "https://static.dafiti.com.ar/p/quiksilver-0972-428714-1-product.jpg" },
            { titulo: "Camisa2", link: "/api/productos/camisas", precio: 3200, stock: 130, categoria: "camisas", img: "https://static.dafiti.com.ar/p/quiksilver-6006-365132-1-product.jpg" },
            { titulo: "Camisa3", link: "/api/productos/camisas", precio: 3500, stock: 60, categoria: "camisas", img: "https://static.dafiti.com.ar/p/quiksilver-6322-250653-1-product.jpg" },
            { titulo: "Camisa4", link: "/api/productos/camisas", precio: 3100, stock: 90, categoria: "camisas", img: "https://static.dafiti.com.ar/p/quiksilver-5371-484114-1-product.jpg" },
            { titulo: "Pantalon1", link: "/api/productos/pantalones", precio: 5000, stock: 50, categoria: "pantalones", img: "https://static.dafiti.com.ar/p/quiksilver-8616-450518-1-product.jpg" },
            { titulo: "Pantalon2", link: "/api/productos/pantalones", precio: 5500, stock: 90, categoria: "pantalones", img: "https://static.dafiti.com.ar/p/quiksilver-1293-058493-1-product.jpg" },
            { titulo: "Pantalon3", link: "/api/productos/pantalones", precio: 4600, stock: 120, categoria: "pantalones", img: "https://static.dafiti.com.ar/p/quiksilver-1160-444786-1-product.jpg" },
            { titulo: "Pantalon4", link: "/api/productos/pantalones", precio: 4900, stock: 170, categoria: "pantalones", img: "https://static.dafiti.com.ar/p/quiksilver-1190-893123-1-product.jpg" },
            { titulo: "Zapatilla1", link: "/api/productos/zapatillas", precio: 7000, stock: 30, categoria: "zapatillas", img: "https://static.dafiti.com.ar/p/quiksilver-6349-374791-1-product.jpg" },
            { titulo: "Zapatilla2", link: "/api/productos/zapatillas", precio: 7500, stock: 60, categoria: "zapatillas", img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/909/583/products/quiksilver-3073-888442-3-product1-345aa500975f0b6e3415932703343966-640-0.jpg" },
            { titulo: "Zapatilla3", link: "/api/productos/zapatillas", precio: 6000, stock: 70, categoria: "zapatillas", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/260/products/80351a9d-6344-444d-9b0b-7e938cee2ef31-1836b3a364900b14b115952427272328-480-0.jpeg" },
            { titulo: "Zapatilla4", link: "/api/productos/zapatillas", precio: 7000, stock: 30, categoria: "zapatillas", img: "https://static.dafiti.com.ar/p/quiksilver-7707-36694-1-product.jpg" }
        ];

        let todosProductos = baseFirebase.collection("TodosLosProductos");
        for (const producto of arrayDeProductos) {
            await todosProductos.doc().set(producto);
        };
    } catch (error) {
        console.log(error);
    }
});
//le borro los parentecis para que no se vuelva a ejecutar y me duplique los productos


//el comando de ejecucion en este caso seria node src/components/Productos.js
//Todos mis productos fueron agregados a mi firebase


//Ahora voy a crear otra funcion que me devuelva las categorias especificas de mis productos:
let arrayCamisas = [];
let arrayRemeras = [];
let arrayPantalones = [];
let arrayZapatillas = [];

(async () => {
    try {
        const camisas = baseFirebase.collection("TodosLosProductos").where("categoria", "==", "camisas");
        let res = await camisas.get();
        res.forEach(cam => {
            arrayCamisas.push({ id: cam.id, ...cam.data() });
        });

        const remeras = baseFirebase.collection("TodosLosProductos").where("categoria", "==", "remeras");
        let res1 = await remeras.get();
        res1.forEach(rem => {
            arrayRemeras.push({ id: rem.id, ...rem.data() });
        });

        const pantalones = baseFirebase.collection("TodosLosProductos").where("categoria", "==", "pantalones");
        let res2 = await pantalones.get();
        res2.forEach(pan => {
            arrayPantalones.push({ id: pan.id, ...pan.data() });
        });

        const zapatillas = baseFirebase.collection("TodosLosProductos").where("categoria", "==", "zapatillas");
        let res3 = await zapatillas.get();
        res3.forEach(zap => {
            arrayZapatillas.push({ id: zap.id, ...zap.data() });
        });
        console.log("La BD de firebase esta conectada");
    } catch (error) {
        console.log(error);
    }
})();



module.exports = { arrayCamisas, arrayPantalones, arrayRemeras, arrayZapatillas };
