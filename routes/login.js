const express = require('express');
const router  = express.Router();
const getUserByEmail = require('../lib/getUserByEmail');

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("login");
  });

  router.post("/", (req, res) => {
    const {email, password} = req.body;
    getUserByEmail(db, email)
      .then(id => {
        if (!id) {
          res.send({error: "error"});
          return;
        } else {
          req.session.userId = id.id;
          res.redirect("/");
        }
      }).catch(err => console.error(null, err.stack));
  });
  return router;
};
