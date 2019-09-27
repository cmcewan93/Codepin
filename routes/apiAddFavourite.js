const express = require('express');
const router  = express.Router();
const favourites = require("../database")


/**
 * API route to add a user's favourites
 */
module.exports = () => {
  router.post("/", (req, res) => {
   console.log(req.session.userId);
    
  let favourite = {};
   favourite.id = req.body.resource.id;
   favourite.user = req.session.userId;

   //console.log('@@@@@@', user);
   //console.log('HERES THE ID TO ADD', req.body.resource);
    favourites.addFavourite(favourite)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};