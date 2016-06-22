module.exports = function *(next) {
    yield this.render('home', { username: 'Anderson' });
    yield next;
};
