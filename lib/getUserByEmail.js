const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: 'midterm'
});

/**
 * Returns a promise with a user object based on specified email
 * @param {*} email 
 */

const getUserbyEmail = (email) => {

  return pool.query(`
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

console.log(getUserbyEmail('kyle@gmail.com'));

exports.getUserbyEmail = getUserbyEmail;