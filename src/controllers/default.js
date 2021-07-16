//src/controllers/default.js

module.exports = {
    index: index
}

function index(req, res){
    res.render('index');
}