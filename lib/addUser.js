const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: 'midterm'
});

const addUser = (user) => {
  return pool.query(`
  INSERT INTO USERS
  VALUES($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, user.password]
  ).then((res) => {
    console.log(re.rows[0]);
    return res.rows[0];
  });
};

exports.addUser = addUser;