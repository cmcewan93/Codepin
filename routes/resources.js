/*
 * All routes for Resources are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 */

const express = require('express');
const router  = express.Router();
const getAllResources = require('../lib/getAllResources');


module.exports = () => {
  router.get("/", (req, res) => {
<<<<<<< HEAD
    //console.log(getAllResources(db, 10));
    getAllResources.getAllResources(db)
    .then(data => {
      //console.log(data);
      //res.render({ data });
      data.forEach(resource => {
       console.log(resource);
      });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
=======
    res.render("resources");
>>>>>>> 702873e87dc8b125f4c42f1e01cb07e7242244f4
  });

  //route

  //route
  return router;
};
