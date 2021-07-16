//server.js
// Nous avons besoin de notre configuration
const app = require('./bin/express')();
const router = require('./bin/express-router')();
const http = require('http');
const server = http.createServer(app);

require('./src/routers/default')(router);
app.use('/', router);

server.listen(3000);
console.log('Serveur lancé sur le port 3000');
