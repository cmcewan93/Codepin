
/**
 * Returns a promise with a user object based on specified email
 * @param {*} email 
 */

const getUserbyEmail = (db, email) => {

  return db.query(`
    SELECT *
    FROM users
    WHERE email = $1;
  `, [email])
    .then(res => {
      res.rows[0];
    })
    .catch(err => {
      console.error('Issue with query' + err);
    });
};

exports.getUserbyEmail = getUserbyEmail;