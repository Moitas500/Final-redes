"use strict";

const config = require("./config");
const server = require("./server");

const startServer = async () => {
    try {
        //Crea un ejemplar de la aplicacion server
        const app = await server(config);

        await app.start();

        console.log(`Servidor corriendo en http://${config.host}:${config.port}...`);

    } catch (error) {
        console.log("Startup error:", error);
    }
};
//Manejo de errores generales
process.on('unhandledRejection', error =>{
    console.error('unhandledRejection',error.message,error)
})
process.on('unhandledException', error =>{
    console.error('unhandledException',error.message,error)
})
startServer();