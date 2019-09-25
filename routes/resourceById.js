/*
 * All routes for Resources are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 */

const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("resourceById");
  });
  return router;
};
