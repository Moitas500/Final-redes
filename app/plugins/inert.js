"use strict";

const inert = require("inert");

module.exports.register = async server => {

    await server.register(inert)

}