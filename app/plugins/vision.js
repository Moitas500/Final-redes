"use strict";

const vision = require('vision');

module.exports.register = async server => {

    await server.register(vision)

}