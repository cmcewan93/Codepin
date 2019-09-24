const express = require('express');
const router  = express.Router();
const favourites = require("../lib/getFavouritesByUser")

module.exports = (db) => {
  router.get("/", (req, res) => {
    favourites.getFavouritesByUser(db, 1)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.send(resource);
          
        }
      }).catch(err => console.error(null, err.stack));
  });
  return router;
};
