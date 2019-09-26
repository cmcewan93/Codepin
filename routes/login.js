const express = require('express');
const router  = express.Router();
const db = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("login");
  });

  router.post("/", (req, res) => {
    const {email, password} = req.body;
    console.log("credential", {email, password});
    console.log("login")
    // console.log("at login", req)
    db.userLogin(email, password)
      .then(id => {
        console.log('asdasd', id);
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
