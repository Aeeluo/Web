//bin/express.js
const express = require('express');
const cons = require('consolidate');


module.exports = function() {

    const app = express();

    app.engine('html', cons.mustache);

    app.set('view engine', 'html');
    app.set('views', './public/views');

    app.use('/css', express.static('./public/css'));
    app.use('/js', express.static('./public/js'));
    app.use('/img', express.static('./public/img'));


    return app;
};
