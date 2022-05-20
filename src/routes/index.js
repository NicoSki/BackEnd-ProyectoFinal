const express = require("express");
const router = express.Router();
const passport = require("passport");
const { arrayCamisas, arrayRemeras, arrayPantalones, arrayZapatillas } = require("../components/Productos");
const usuario = require("../models/modeloUsuarios");



//Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

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
    //console.log(categorias.arrayCamisas);
});

router.get("/api/productos/camisas/:id", (req, res) => {
    let { id } = req.params;
    let particular = arrayCamisas.filter(e => e.id == id);
    res.render("secciones/producto", { particular });
    //console.log(particular[0].titulo);
})

/*--------------------------
        REMERAS
---------------------------*/
router.get("/api/productos/remeras", isAuthenticated, (req, res) => {
    res.render("secciones/remeras");
})

router.get("/api/productos/remeras/:id", isAuthenticated, (req, res) => {
    let { id } = req.params;
    let particular = arrayRemeras.filter(e => e.id == id);
    res.render("secciones/producto", { particular });
    //console.log(particular[0].titulo);
})


/*--------------------------
       PANTALONES
---------------------------*/
router.get("/api/productos/pantalones", isAuthenticated, (req, res) => {
    res.render("secciones/pantalones");
})

router.get("/api/productos/pantalones/:id", isAuthenticated, (req, res) => {
    let { id } = req.params;
    let particular = arrayPantalones.filter(e => e.id == id);
    res.render("secciones/producto", { particular });
    //console.log(particular[0].titulo);
})


/*--------------------------
        ZAPATILLAS
---------------------------*/
router.get("/api/productos/zapatillas", isAuthenticated, (req, res) => {
    res.render("secciones/zapatillas");
})

router.get("/api/productos/zapatillas/:id", isAuthenticated, (req, res) => {
    let { id } = req.params;
    let particular = arrayZapatillas.filter(e => e.id == id);
    res.render("secciones/producto", { particular });
})


/*--------------------------
        CARRITO
---------------------------*/
router.get("/api/carrito", (req, res) => {
    res.render("secciones/carrito");
})


/*--------------------------
        FIN CARRITO
---------------------------*/

/*--------------------------
    3ER ENTREGA PROY FINAL
---------------------------*/
/*--------------------------
        REGISTRO
---------------------------*/
//Ahora le agreo lo declarado en passport

router.get("/registro", (req, res) => {
    res.render("registro");
});

router.post("/registro", passport.authenticate("registro_local", {
    successRedirect: "/api/productos/camisas",
    failureRedirect: "/registro",
    passReqToCallback: true
}));


/*--------------------------
        INGRESO
---------------------------*/
router.get("/ingreso", (req, res) => {
    res.render("ingreso");
})

router.post("/ingreso", passport.authenticate("ingreso_local", {
    successRedirect: "/api/productos/camisas",
    failureRedirect: "/ingreso",
    passReqToCallback: true
}));

/*--------------------------
        EXIT
---------------------------*/
router.get("/exit", (req, res) => {
    req.logOut();
    res.redirect("/");
})

/*--------------------------
FUNCIÓN DE AUTENTICACIÓN
---------------------------*/
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/ingreso");
}
//Esta funcion la voy a agregar a las secciones de mi sitio web

//Luego de crear las rutas para el ingreso/registro/salida, creo la carpeta llamada passport

/*--------------------------
            PERFIL
---------------------------*/


router.get("/perfil", isAuthenticated, async (req, res) => {
    const persona = await usuario.findOne({ email: "prueba@gmail.com" });

    res.render("secciones/perfil", persona);

});



module.exports = router;