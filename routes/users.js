/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    let templateVars = {};
    Promise.all([db.getUser(req.session.userId)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("users", templateVars);
      })
      .catch(err => console.error(null, err.stack));
  });
  return router;
};
