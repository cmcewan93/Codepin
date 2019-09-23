/*
 * All routes for Users are defined here
 * Middleware functions
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const newUser = require('../lib/addUser')
//const bcrypt = require('bcrypt');

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("register");
  });

  router.post("/", (req, res) => {
    const user = req.body
    console.log(user);
    //console.log('Printing the req.body', req.body);
    // user.password = bcrypt.hashSync(user.password, 12);
    newUser.addUser(db, user)
      .then(user => {
        if(!user) {

          res.send('Sending Error' + {error: "error"})
          return;
        }
        req.session.userId = user.id;
      })
      .catch(error => res.send(error));
  })



  return router;
};
