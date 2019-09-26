const express = require('express');
const router  = express.Router();
const search = require("../database")

module.exports = () => {
  router.get("/", (req, res) => {
    let templateVars = {};
    console.log("id", req.session.userId);
    Promise.all([search.getUser(req.session.userId)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("search", templateVars);
      })
      .catch(err => console.error(null, err.stack));
  });

  router.get("/", (req, res) => {
    console.log("?????", req);
    search.searchByTag("Programming")
      .then(resource => {
        console.log('this is the resource', resource)
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.json({ resource });
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
