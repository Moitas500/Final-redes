"use strict";


/****************************************
* RUTAS DEL API REST DE LA APLICACIÓN
* **************************************/
//mongo "mongodb+srv://publibike.6sxap.mongodb.net/<dbname>" --username devloto
module.exports.register = async server => {

    /**
     * RUTAS DE ADMINISTRACION DE LA APP
     */
    //Permite el envio de temperatura y humedad 
    //por parametros
    server.route({
        method: 'GET',
        path: '/api/data/{tmp}/{hmd}',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let result;
            try {
                const temperatura = req.params.tmp;
                const humedad = req.params.hmd;
                console.log(req.params)
                const date = new Date();
                const hora = date.getHours();
                const minutos = date.getMinutes();
                const segundos = date.getSeconds();
                let admini = {
                    temperatura: temperatura,
                    humedad: humedad,
                    // date: `${hora}:${minutos}:${segundos}`
                    date:date
                };
                // let usuario = parseInt(admini.usuario)

                result = await req.mongo.db.collection('esp32').insertOne(admini);
                console.log(result.ops)
                return result.ops;
            } catch (error) {
                console.log(error)
                
            }
        }
    });


  

    //Obtiene todos los datos guardados
    server.route({
        method: 'GET',
        path: '/api/data/sensor',
        options: {
            cors: true
        },
        handler: (req, h) => {

            const usuario = req.mongo.db.collection('esp32').find().toArray();
            return usuario;
        }
    });


}