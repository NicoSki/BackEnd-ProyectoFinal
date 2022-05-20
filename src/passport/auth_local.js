//Dentro de passport, declaro sus variables para la autenticación:
//Luego de declara las variables, creo la conexion a la base de datos de Mongo, creo un nuevo archivo llamado base_datosMG.js

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;



//Requiero Models:
let usuario = require("../models/modeloUsuarios");

//Tambien voy a utilizar las funciones de passport para ser y deserizalizar a un usuario:
//Para que no me pide iniciar sesion constantemente
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usuario.findById(id);
    done(null, user);
});



/*-----------------------
        REGISTRO
------------------------*/

passport.use("registro_local", new LocalStrategy({
    usernameField: "email",
    passwordField: "contrasena",
    passReqToCallback: true
}, async (req, email, contrasena, done) => {
    const mail_repetido = usuario.findOne({ email: email });
    // if (mail_repetido) {
    //     return done(null, false, req.flash("mensajeDeRegistro", "Esa casilla de mail ya existe!"));
    // } else {
        try {
            const newUser = new usuario();
            newUser.nombre = req.body.nombre;
            newUser.edad = req.body.edad;
            newUser.telefono = req.body.telefono;
            newUser.direccion = req.body.direccion;
            newUser.email = email;
            newUser.contrasena = newUser.encryptPassword(contrasena);
            console.log(newUser)
            await newUser.save();
            done(null, newUser);
        } catch (error) {
            console.log(error);
        }
    // }
}));

/*-----------------------
        INGRESO
------------------------*/
passport.use("ingreso_local", new LocalStrategy({
    usernameField: "email",
    passwordField: "contrasena",
    passReqToCallback: true
  }, async (req, email, contrasena, done) => {
    const user = await usuario.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash("mensajeDeError", "No se encontro el usuario"));
    }
    if(!user.comparePassword(contrasena)) {
      return done(null, false, req.flash("mensajeDeIngreso", "La contraseña es inválida"));
    }
    return done(null, user);
  }));