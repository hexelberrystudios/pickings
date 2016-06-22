module.exports = function (app) {
    const _ = require('koa-route');
    const controllers = {
        home: require('./controllers/home')
    };

    const api = {
        test: require('./api/test')
    };

    app.use(_.get('/', controllers.home));
    app.use(_.get('/test', api.test));
};