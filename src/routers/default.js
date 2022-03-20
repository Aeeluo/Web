const controller = require('./../controllers/default');

module.exports = function(router) {
    router.get('/', controller.index);
    router.get('/climatisation', controller.renderClim);
    router.get('/expertise', controller.renderExpertise);
}