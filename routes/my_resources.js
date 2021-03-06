const express = require('express');
const router  = express.Router();
const resources = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    let templateVars = {};
    console.log("id", req.session.userId);
    Promise.all([resources.getUser(req.session.userId)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("my_resources", templateVars);
      })
      .catch(err => console.error(null, err.stack));
  });
  return router;
};
