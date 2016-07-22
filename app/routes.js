
module.exports = function (app) {
  app.get('/', function (req, res) {
    req.session.table = null;

    res.render('partials/home');
  });

  app.get('/table-wizard', function (req, res) {
    // started the wizard; make a table for the user to add their guests on
    // table should expire in two weeks if wizard left unfinished
    if (!req.session.table) {
      req.session.table = {
        id: 1,
        guests: [],
        guestCurrentId: 1
      };
    }

    res.render('partials/table', {
      guests: req.session.table.guests,
      tableId: req.session.table.id
    });
  });

  app.get('/add-guest', function (req, res) {
    res.render('partials/add-guest', {
      preferences: [{
        id: 1,
        name: 'Meat'
      }, {
        id: 2,
        name: 'Gluten'
      }, {
        id: 3,
        name: 'Dairy'
      }],
      tableId: req.session.table.id
    });
  });

  app.post('/guest', function (req, res) {
    req.session.table.guests.push({
      id: req.session.table.guestCurrentId++,
      name: req.body.guestName
    });

    res.redirect('/table-wizard');
  });
};
