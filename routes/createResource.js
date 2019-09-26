const express = require('express');
const router  = express.Router();
const create = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("createResource");
  });

  router.post("/", (req, res) => {
    const resource = req.body;
    console.log(resource);
    create.createResource(resource)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          console.log("FUCK THIS SHIT");
          // res.redirect("/resources");
          res.send("created?");
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
