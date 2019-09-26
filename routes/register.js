const express = require('express');
const router  = express.Router();
const db = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("register");
  });

  router.post("/", (req, res) => {
    const user = req.body;
    //console.log("register")
    //console.log(req.body)
    db.userRegister(user)
      .then(id => {
        //console.log("at register", id);
        if (!id) {
          res.send({error: "Email already exists!"});
          return;
        } else {
          req.session.userId = id[0].id;
          res.redirect("/");
        }
      }).catch((err) => {
        //alert("EMAIL ALREADY EXISTS");
         console.error(null, err.stack)
      });
  });

  return router;
};
