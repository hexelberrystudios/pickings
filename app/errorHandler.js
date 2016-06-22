export default function (app) {
  function errorHandler () {
    return function* (next) {
      try {
        yield next;
      } catch (e) {
        this.status = 500;
        this.body = 'internal server error';
      }
    }
  }

  app.use(errorHandler());
}