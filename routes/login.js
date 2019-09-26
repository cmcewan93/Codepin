const express = require('express');
const router  = express.Router();
const db = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("login");
  });

  router.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log("login")
    console.log(req.body)
    db.userLogin(email, password)
      .then(id => {
        if (!id) {
          res.send({"code":204, "success": "Email and password do not match"});
          return;
        } else {
          req.session.userId = id.id;
          res.redirect("/");
        }
      }).catch(err => console.error(null, err.stack));
  });
  return router;
};
