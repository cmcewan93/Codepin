/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserById =(db, id) => {
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

exports.getUserById = getUserById;
