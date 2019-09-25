// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const pool = new Pool(dbParams);
pool.connect();

// Login: Checks the database for the user's email and password to Login

const userLogin = function(email, password) {
  return pool.query(`
  SELECT id
  FROM users
  WHERE email = $1 AND password = $2
  `, [email, password])
    .then(res => res.rows[0])
    .catch(err => console.error(null, err.stack));
};

exports.userLogin = userLogin;


// Register: Adds a user to the database

const userRegister = function(user) {
  return pool.query(`
  INSERT INTO users
  (
  name,
  email,
  password
  )
  VALUES
  ($1, $2, $3) RETURNING *
  `, [user.name, user.email, user.password])
  .then(res => res.rows)
  .catch(err => console.error(null, err.stack));
};

exports.userRegister = userRegister;

//Resources: Get all available resource
const getAllResources = (limit) => {
  return pool.query(`
  SELECT *
  FROM resources
  LIMIT $1
  `, [limit]
  ).then((res) => {
    return res.rows;
  });
};

exports.getAllResources = getAllResources;


const getResourceById = (resource_id) => {
  return pool.query(`
  SELECT *
  FROM resources
  WHERE id = $1;
  `, [resource_id]
  ).then((res) => {
    return res.rows;
  });
};

exports.getResourceById = getResourceById;


const getFavouritesByUser = (user_id) => {
  return pool.query(`
  SELECT users.id as user_id, resources.id as resource_id, resources.title as title, resources.description as description, resources.imgUrl as imgurl, resources.created_at as created_at
  FROM favourites
    JOIN resources ON resources.id = favourites.resource_id
    JOIN users ON users.id = favourites.user_id
  WHERE users.id = $1;
  `, [user_id]
  ).then((res) => {
    return res.rows;
  });
};

exports.getFavouritesByUser = getFavouritesByUser;

const searchByTag = (tag) => {
  return pool.query(`
  SELECT *
  FROM resources
  WHERE tag = $1
  `, [tag]
  ).then((res) => {
    return res.rows;
  });
};

exports.searchByTag = searchByTag;

const deleteFavourite = (favourite_id) => {
  return pool.query(`
  DELETE FROM favourites
  WHERE id = $1;
  `, [favourite_id])
};

exports.deleteFavourite = deleteFavourite;