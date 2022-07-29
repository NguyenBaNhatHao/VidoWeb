require('dotenv').config();
 
var config = {
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    server: process.env.HOST,
    port: parseInt(process.env.PORTDB, 10),
    database: process.env.DATABASE,
    trustServerCertificate: true
};
console.log('port: '+config.port);
module.exports = config