
/**
 * Adds a user object to user table in database
 * @param {*} user 
 */

const addUser = (db, user) => {
  console.log(user.name, user.email, user.password);
  return db.query(`
  INSERT INTO USERS(name, email, password)
  VALUES($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, user.password]
  ).then((res) => {
    console.log('ADD USERS WORKED', res.rows[0]);
    return res.rows[0];
  });
};


exports.addUser = addUser;