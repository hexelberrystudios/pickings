
module.exports = function (app) {
  var recipeCount = 1,
      guestCount = 1,
      tableCount = 1;

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

  app.get('/table-wizard-2', function (req, res) {
    var i,
        j,
        guest;
    var preferences = {},
        preferenceList = [];

    if (req.session.table && req.session.table.guests) {
      // get the list of preference ids from the list of guests
      // and make sure each id is only included once
      for (i = 0; i < req.session.table.guests.length; i++) {
        guest = req.session.table.guests[i];
        for (j = 0; j < guest.preferences.length; j++) {
          preferences[guest.preferences[j]] = true;
        }
      }
      // convert the list of ids to an array
      for (var preference in preferences) {
        preferenceList.push(preference);
      }
    }
    console.log(preferenceList);
    // based on the preferences of the list of guests,
    // get a list of recipes
    res.render('partials/recipe-results', {
      recipes: req.session.recipes
    });
  });

  app.get('/add-guest', function (req, res) {
    res.render('partials/add-guest-form', {
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
    var preferences = [],
        preferenceIdx = 11;

    for (var prop in req.body) {
      if (prop.indexOf('preference_') !== -1) {
        preferences.push(parseInt(prop.substring(preferenceIdx)));
      }
    }

    req.session.table.guests.push({
      id: req.session.table.guestCurrentId++,
      name: req.body.guestName,
      preferences: preferences
    });

    res.redirect('/table-wizard');
  });

  app.get('/recipe/:id', function (req, res) {
    var recipe;
    var id = parseInt(req.params.id);
    
    recipe = req.session.recipes.reduce(function (recipe) {
      if (recipe.id === id) {
        return recipe;
      }
    });

    res.render('partials/recipe', {
      recipe: recipe
    });
  });

  app.get('/add-recipe', function (req, res) {
    res.render('partials/add-recipe', {
      recipe: req.session.recipe
    });
  });

  app.get('/add-recipe-details', function (req, res) {
    res.render('partials/add-recipe-details', {
      recipe: req.session.recipe
    });
  });

  app.get('/add-ingredient', function (req, res) {
    res.render('partials/add-ingredient-form');
  });

  app.get('/add-direction', function (req, res) {
    res.render('partials/add-direction-form');
  });

  app.post('/add-ingredient', function (req, res) {
    req.session.recipe.ingredients.push({
      id: 1,
      amount: req.body.amount,
      name: req.body.name
    });

    res.redirect('/add-recipe-details');
  });

  app.post('/add-direction', function (req, res) {
    req.session.recipe.directions.push(req.body.direction);

    res.redirect('/add-recipe-details');
  });

  app.post('/recipe', function (req, res) {
    if (req.body.name) {
      req.session.recipe = {
        id: recipeCount,
        name: req.body.name,
        ingredients: [],
        directions: [],
        thumbnail: null 
      }

      res.redirect('/add-recipe-details');
    } else {
      if (!req.session.recipes) {
        req.session.recipes = [];
      }

      req.session.recipes.push(req.session.recipe);
      recipeCount++;
      delete req.session.recipe;

      res.redirect('/');
    }
  });

  app.get('/recipes', function (req, res) {
    res.render('partials/all-recipes', {
      recipes: req.session.recipes
    });
  });

  app.get('/reset-session', function (req, res) {
    req.session.table = null;
    req.session.recipes = null;
    recipeCount = 1;
    tableCount = 1;
    guestCount = 1;
  });
};
