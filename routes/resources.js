/*
 * All routes for Resources are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 */

const express = require('express');
const router  = express.Router();
const resources = require('../database');

module.exports = () => {
  router.get("/", (req, res) => {
    let templateVars = {};
    console.log("id", req.session.userId);
    Promise.all([resources.getUser(req.session.userId)])
      .then((values) => {
        templateVars.user = values[0];
        res.render("resources", templateVars);
      })
      .catch(err => console.error(null, err.stack));
  });

  // router.get("/my_resources", (req, res) => {
  //   // console.log('sdfsdfsd' + res);
  //   console.log("i got here");
  //   console.log(req.params);
  //   resources.getResourceById(req.params.id)
  //     .then(resource => {
  //       if (!resource) {
  //         res.send({error: "error"});
  //         return;
  //       } else {
  //         res.json({ resource });
  //         // console.log("i did it son!")
  //       }
  //     }).catch(err => console.error(null, err.stack));
  // });

  return router;
};
