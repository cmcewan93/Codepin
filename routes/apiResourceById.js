const express = require('express');
const router  = express.Router();
const resourceById = require("../lib/getResourceById");
// const resources = require("../lib/getAllResources");

module.exports = (db) => {

  router.get("/", (req, res) => {
    resourceById.getResourceById(db, 10)
      .then(resource => {
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
