const express = require('express');
const router  = express.Router();
const favourites = require("../database")


/**
 * API route to delete a user's favourites
 */
module.exports = () => {
  router.post("/", (req, res) => {
    console.log('HERES THE ID TO DELETE', req.body);
   let id = req.body.favourite_id;
    favourites.deleteFavourite(id)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};