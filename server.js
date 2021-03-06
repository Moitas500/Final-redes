"use strict";

const Hapi = require("hapi");
const path = require('path');
const handlebars = require('handlebars');
const plugins = require("./app/plugins");
const routes = require("./app/routes");
const moment = require('moment');

const app = async config => {

    const { host, port } = config;

    //Crea una ejemplificacion de Hapi
    const server = Hapi.server({
        host,
        port,
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'public')
            }
        }
    });

    //Se almacena la configuración para ser usada luego
    server.app.config = config;

    //Se registran los plugins
    await plugins.register(server);

    //Se configura es estado para mantener la sesión
    server.state('admin',{
        ttl: 1000*60*60,
        // isSecure: process.env.NODE_ENV === 'prod',
        isSecure: false,
        encoding: 'base64json'
    })


    //Se configura por medio de inert las vistas renderizadas
    server.views({
        engines: {
            hbs: handlebars
        },
        relativeTo: __dirname,
        path: 'views',
        layout: true,
        layoutPath: 'views'
    })

    //Se configuran helpers de handlebars
    handlebars.registerHelper('formatDate', function (dateString) {
        moment.locale('es');
        return new handlebars.SafeString(
            moment(dateString).format("D MMM Y")
        );
    });


    //Se registran las rutas
    await routes.register(server);

    return server;
}

module.exports = app;