require('dotenv').config();
var config = {
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    server: process.env.HOST,
    database: process.env.DATABASE,
    trustServerCertificate: true
};

module.exports = config