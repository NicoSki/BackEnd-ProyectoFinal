const express = require("express");
const router = express.Router();


/*--------------------------
        INITIALIZE PAGE
---------------------------*/
router.get("/", (req, res) => {
    res.render("main");
})

/*--------------------------
        CAMISAS
---------------------------*/
router.get("/api/productos/camisas", (req, res) => {
    res.render("secciones/camisas");
})

/*--------------------------
        REMERAS
---------------------------*/
router.get("/api/productos/remeras", (req, res) => {
    res.render("secciones/remeras");
})


/*--------------------------
       PANTALONES
---------------------------*/
router.get("/api/productos/pantalones", (req, res) => {
    res.render("secciones/pantalones");
})


/*--------------------------
        ZAPATILLAS
---------------------------*/
router.get("/api/productos/zapatillas", (req, res) => {
    res.render("secciones/zapatillas");
})


/*--------------------------
        CARRITO
---------------------------*/
router.get("/api/carrito", (req, res) => {
    res.render("secciones/carrito");
})

module.exports = router;