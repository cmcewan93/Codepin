const express = require('express');
const router  = express.Router();
const favourites = require("../lib/getFavouritesByUser")


/**
 * API route to retrieve a user's favourites
 */
module.exports = (db) => {
  router.get("/", (req, res) => {
    //Get favourites for user that is logged in
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
