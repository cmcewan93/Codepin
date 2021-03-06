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

// User: Get user based on cookie id

const getUser = function(cookieId) {
  if (!cookieId) {
    return undefined;
  }

  let queryString = `
  SELECT *
  FROM users
  `;

  queryString += `WHERE id = '${cookieId}'`;

  return pool.query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getUser = getUser;

//Resources: Get all available resource
const getAllResources = (limit) => {
  return pool.query(`
  SELECT resources.*, likes.like_count as likes
  FROM resources
    LEFT JOIN likes ON resources.id = likes.resource_id
  ORDER BY resources.id
  LIMIT $1;
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

const getResourcesByUser = (user_id) => {
  return pool.query(`
  SELECT resources.*, users.id
  FROM resources
    JOIN users ON users.id = resources.user_id
  WHERE users.id = $1;
  `, [user_id])
  .then((res) => {
    return res.rows;
  });
}

exports.getResourcesByUser = getResourcesByUser;


const getFavouritesByUser = (user_id) => {
  return pool.query(`
  SELECT favourites.id as favourite_id, users.id as user_id, resources.id as resource_id, resources.siteUrl as siteUrl, resources.title as title, resources.description as description, resources.imgUrl as imgurl, resources.created_at as created_at
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

//delete favourite
const deleteFavourite = (favourite_id) => {
  return pool.query(`
  DELETE FROM favourites
  WHERE id = $1;
  `, [favourite_id])
};

exports.deleteFavourite = deleteFavourite;

//add favourite
const addFavourite = (favourite) => {
console.log('This is the favourite', favourite);
  return pool.query(`
  INSERT INTO favourites (user_id, resource_id)
  VALUES ($1, $2);
  `,[favourite.user, favourite.id])
  .then(res => console.log(res.rows))
  .catch(err => console.error(null, err.stack));
}

exports.addFavourite = addFavourite;

//Create resource
const createResource = (resource) => {
  return pool.query(`
    INSERT INTO resources (user_id, title, description, tag, siteUrl, imgUrl, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
  `, [resource.user_id, resource.title, resource.description, resource.tag, resource.url, resource.imgUrl, "2019-09-25"])
  .then(res => res.rows)
  .catch(err => console.error(null, err.stack));
};

exports.createResource = createResource;
