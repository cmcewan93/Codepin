const express = require('express');
const router  = express.Router();
const favourites = require('../database')

module.exports = () => {
  router.get(`/:username`, (req, res) => {
    let templateVars = {};
    Promise.all([favourites.getUser(req.session.id)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("favourites", templateVars);
      })
      .catch(err => console.error(null, err.stack));

  });
  return router;
};