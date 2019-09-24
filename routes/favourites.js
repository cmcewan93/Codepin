const express = require('express');
const router  = express.Router();
const favourites = require("../lib/getFavouritesByUser")

module.exports = (db) => {
  router.get("/", (req, res) => {
   // const {tag} = req.body;
   // console.log(req.query);
    //console.log('Logging req body    ', req.body )
    favourites.getFavouritesByUser(db, 1)
      .then(resource => {
        console.log('FAVOURITES', req)
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          resource.forEach(element => {
            console.log(element);
          });
          //console.log("asasd", resource);
          // res.send("BAITCH");
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
