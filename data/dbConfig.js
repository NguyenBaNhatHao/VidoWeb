require('dotenv').config();
const timeout = 120_000_000;
if(process.env.PORTDB){
    var config = {
        user: process.env.USERDB,
        password: process.env.PASSWORD,
        server: process.env.HOST,
        port: parseInt(process.env.PORTDB, 10),
        database: process.env.DATABASE,
        trustServerCertificate: true,
        requestTimeout: timeout,
        pool: {
            max: 1000, min: 1,
            idleTimeoutMillis: timeout,
            acquireTimeoutMillis: timeout,
            createTimeoutMillis: timeout,
            destroyTimeoutMillis: timeout,
            reapIntervalMillis: timeout,
            createRetryIntervalMillis: timeout,
        }
    };
}else{
    var config = {
        user: process.env.USERDB,
        password: process.env.PASSWORD,
        server: process.env.HOST,
        database: process.env.DATABASE,
        trustServerCertificate: true,
        requestTimeout: timeout,
        pool: {
            max: 1000, min: 1,
            idleTimeoutMillis: timeout,
            acquireTimeoutMillis: timeout,
            createTimeoutMillis: timeout,
            destroyTimeoutMillis: timeout,
            reapIntervalMillis: timeout,
            createRetryIntervalMillis: timeout,
          }
    };
}
console.log('port: '+config.port);
module.exports = config