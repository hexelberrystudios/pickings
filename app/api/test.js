module.exports = function *(next) {
    this.body = { message: 'connection tested' };
    yield next;
};
