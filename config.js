"use strict";

const assert = require("assert");
const dotenv = require("dotenv");

//Lee en el archivo .env
dotenv.config();

//Captura las variables de entorno que la aplicación necesita
const {
    PORT,
    NODE_ENV,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    MONGO_USER,
    MONGO_SERVER,
    MONGO_DATABASE,
    MONGO_PASSWORD,
}=process.env;

// const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// valida la información de configuración requerida
assert( PORT, "PORT configuration is required." );
assert( NODE_ENV, "NODE_ENV configuration is required." );
assert( HOST, "HOST configuration is required." );
assert( HOST_URL, "HOST_URL configuration is required." );
assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
assert( MONGO_SERVER, "MONGO_SERVER configuration is required." );
assert( MONGO_DATABASE, "MONGO_DATABASE configuration is required." );
assert( MONGO_USER, "MONGO_USER configuration is required." );
assert( MONGO_PASSWORD, "MONGO_PASSWORD configuration is required." );
// assert( OKTA_ORG_URL, "OKTA_ORG_URL configuration is required." );
// assert( OKTA_CLIENT_ID, "OKTA_CLIENT_ID configuration is required." );
// assert( OKTA_CLIENT_SECRET, "OKTA_CLIENT_SECRET configuration is required." );

// export the configuration information
module.exports = {
    port: PORT,
    node_env: NODE_ENV,
    host: HOST,
    url: HOST_URL,
    cookiePwd: COOKIE_ENCRYPT_PWD,
    mongo: {
        server: MONGO_SERVER,
        database: MONGO_DATABASE,
        user: MONGO_USER,
        password: MONGO_PASSWORD
    },
 };