const express = require('express');
const router  = express.Router();
const db = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("register");
  });

  router.post("/", (req, res) => {
    const user = req.body;
    console.log("register")
    console.log(req.body)
    db.userRegister(user)
      .then(id => {
        if (!id) {
          res.send({error: "error"});
          return;
        } else {
          req.session.userId = id[0].id;
          res.redirect("/");
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
