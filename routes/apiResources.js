/*
 * All routes for Resources are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 */

const express = require('express');
const router  = express.Router();
const resources = require('../lib/getAllResources');

module.exports = (db) => {
  router.get("/", (req, res) => {
    resources.getAllResources(db)
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};