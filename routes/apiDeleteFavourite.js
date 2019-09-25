const express = require('express');
const router  = express.Router();
const favourites = require("../database")


/**
 * API route to retrieve a user's favourites
 */
module.exports = () => {
  router.get("/", (req, res) => {
    //delete favourite from database
    favourites.deleteFavourite()
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};