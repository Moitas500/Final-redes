module.exports = {
    apps : [{
      name        : "final_redes1",
      script      : "./index.js",
      watch       : true,
      exec_mode   : "cluster",
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
         "NODE_ENV": "production",
         "PORT"    : 3010
      }
    }]
  }