const express = require('express');
const router  = express.Router();
const search = require("../lib/searchByTag")

module.exports = (db) => {
  router.get("/", (req, res) => {
   // const {tag} = req.body;
   // console.log(req.query);
    //console.log('Logging req body    ', req.body )
    search.searchByTag(db, req.query.tag)
      .then(resource => {
        console.log('this is the resource', resource)
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.json({ resource });
          // resource.forEach(element => {
          //   console.log(element.title);
          // });
          // res.render('resources');
          //console.log("asasd", resource);
          // res.send("BAITCH");
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
