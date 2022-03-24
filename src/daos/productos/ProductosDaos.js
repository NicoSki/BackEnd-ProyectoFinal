/*-------------------------------
            FIREBASE
--------------------------------*/

//Declaro las variables que me da firebase para conectar la base

let admin = require("firebase-admin");

let serviceAccount = require("./config/proyfinal-backend-firebase-adminsdk-dgjd3-907fea9047.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { db };