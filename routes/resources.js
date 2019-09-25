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
    res.render("resources");
  });

  router.get("/:id", (req, res) => {
    // console.log('sdfsdfsd' + res);
    console.log("i got here");
    console.log(req.params);
    resources.getResourceById(req.params.id)
      .then(resource => {
        if (!resource) {
          res.send({error: "error"});
          return;
        } else {
          res.json({ resource });
          // console.log("i did it son!")
        }
      }).catch(err => console.error(null, err.stack));
  });

  return router;
};
