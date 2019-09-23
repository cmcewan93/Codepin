
/**
 * Adds a user object to user table in database
 * @param {*} user 
 */

const addUser = (db, user) => {
  return db.query(`
  INSERT INTO USERS
  VALUES($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, user.password]
  ).then((res) => {
    console.log(res.rows[0]);
    return res.rows[0];
  });
};

exports.addUser = addUser;