const express = require('express');
const router  = express.Router();
const search = require("../database")

module.exports = () => {
  // router.get("/", (req, res) => {
  //   let templateVars = {};
  //   console.log("id", req.session.userId);
  //   Promise.all([search.getUser(req.session.userId)])
  //     .then((values) => {
  //       templateVars.user = values[0];
  //       res.render("searchedResource", templateVars);
  //     })
  //     .catch(err => console.error(null, err.stack));
  // });

  router.get("/", (req, res) => {

    // res.send('OK');
    search.searchByTag(req.query.tag)
      .then(resource => {
        console.log('this is the resource', resource)
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.json({ resource });
        // let templateVars = { resources: resource };
        // console.log("id", req.session.userId);
        // console.log("WTF", req.body)
        // Promise.all([search.getUser(req.session.userId)])
        //   .then((values) => {
        //     templateVars.user = values[0];
        //     res.render("searchedResource", templateVars);
        //   })
        //   .catch(err => console.error(null, err.stack));
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
