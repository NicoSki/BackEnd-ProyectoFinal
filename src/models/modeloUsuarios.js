const mongoose = require("mongoose");
//Para encriptar la contraseña:
const contrasena_segura = require("bcrypt-nodejs");
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: String,
    edad: String,
    telefono: String,
    direccion: String,
    email: String,
    contrasena: String,
});

//Variables para encriptar la contraseña:
//Encripta
usuarioSchema.methods.encryptPassword = (contrasena) => {
    return contrasena_segura.hashSync(contrasena, contrasena_segura.genSaltSync(15));
};

//Compara las contraseñas
usuarioSchema.methods.comparePassword = function (contrasena) {
    return contrasena_segura.compareSync(contrasena, this.contrasena);
};

module.exports = mongoose.model("UserSchema", usuarioSchema);

//Una vez definidas las estructuras y el encriptado/compraracion de las contraseñas, me voy a la carpeta passport y lo añado