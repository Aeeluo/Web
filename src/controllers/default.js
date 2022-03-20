//src/controllers/default.js

module.exports = {
    index: index,
    renderClim : renderClim,
    renderExpertise : renderExpertise
}

function index(req, res){
    res.render('index');
}

function renderClim(req, res){
    res.render('clim');
}

function renderExpertise(req, res){
    res.render('expertise');
}