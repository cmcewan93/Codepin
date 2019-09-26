const express = require('express');
const router  = express.Router();
const create = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    let templateVars = {};
    Promise.all([create.getUser(req.session.userId)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("createResource", templateVars);
      })
      .catch(err => console.error(null, err.stack));
  });

  router.post("/", (req, res) => {
    // const resource = req.body;
    const templateVars = { user_id: req.session.userId, title: req.body.title, description: req.body.description,
    tag: req.body.tag, siteUrl: req.body.siteUrl, imgUrl:  req.body.imgUrl};
    console.log(templateVars);
    create.createResource(templateVars)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.redirect("/my_resources");
          // res.send("created?");
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
