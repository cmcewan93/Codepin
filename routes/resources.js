/*
 * All routes for Resources are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 */

const express = require('express');
const router  = express.Router();
const getAllResources = require('../lib/getAllResources');


module.exports = (db) => {
  router.get("/", (req, res) => {
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
  });

  //route

  //route
  return router;
};
