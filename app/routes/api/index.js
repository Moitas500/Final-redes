"use strict";

const esp32= require("./esp32/index");

module.exports.register = async server => {
    await esp32.register(server);
};