"use strict";

const mongoDB = require("hapi-mongodb");

module.exports.register = async server => {

    const config = server.app.config.mongo;

    await server.register({
        plugin: mongoDB,
        options: {
            url: `mongodb+srv://${config.user}:${config.password}@${config.server}.mongodb.net/${config.database}?retryWrites=true&w=majority`,
            settings: {
                useUnifiedTopology: true
            },
            decorate: true

        }
    });
};