const express = require('express');
const router  = express.Router();
const search = require("../database")

module.exports = () => {
  router.get("/", (req, res) => {
   // const {tag} = req.body;
   // console.log(req.query);
    //console.log('Logging req body    ', req.body )
    console.log(req.query.tag);
    search.searchByTag(req.query.tag)
      .then(resource => {
        console.log('this is the resource', resource)
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
