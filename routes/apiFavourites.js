const express = require('express');
const router  = express.Router();
const favourites = require("../database")


/**
 * API route to retrieve a user's favourites
 */
module.exports = () => {
  router.get("/", (req, res) => {
    //Get favourites for user that is logged in
    favourites.getFavouritesByUser(1)
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
