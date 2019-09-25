const express = require('express');
const router  = express.Router();
const resourceById = require("../database");
// const resources = require("../lib/getAllResources");

module.exports = () => {

  router.get("/:id", (req, res) => {
    // console.log('sdfsdfsd' + res);
    console.log(req.params);
    resourceById.getResourceById(req.params.id)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.json({ resource });
          console.log("i did it son!")
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
