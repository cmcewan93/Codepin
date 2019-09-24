const { Pool } = require('pg');

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "midterm"
});

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(db, id) {
  return db.query(`
  SELECT *
  FROM users
  WHERE id = $1;
  `, [id])
  .then(res =>
    console.log(res.rows[0]))
  .catch(err => {
    console.log(err);
  });
};

exports.getUserWithId = getUserWithId;
