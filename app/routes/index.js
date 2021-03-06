"use strict";

const api = require("./api");

/****************************************
* RUTAS DE VISUALIZACIÓN DE LA APLICACIÓN
* **************************************/

module.exports.register = async server => {
    //registra la ruta api
    await api.register(server);

    /************************************
     * Rutas para la visualización de la app
     * ***********************************/
    //Ruta de login del admin
    server.route({
        method: "GET",
        path: "/home",
        handler: async (request, h) => {

            const esp32 = await request.mongo.db.collection('esp32').find({}).toArray();
            console.log(esp32)

            return h.view('index', null,
                {
                    layout: 'index'
                })
        }
    });

    //Ruta que redirecciona al index
    server.route({
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return h.redirect('FinalRedes/home')
        }
    });
    //Ruta que permite cargar los diferentes assets de las vistas
    server.route({
        method: "GET",
        path: "/assets/{param*}",
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    });
}