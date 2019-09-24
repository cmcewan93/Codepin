
const getFavouritesByUser = (db, user_id) => {
  return db.query(`
  SELECT users.id as user_id, resources.id as resource_id, resources.title as title, resources.description as description, resources.created_at as created_at
  FROM favourites
    JOIN resources ON resources.id = favourites.resource_id
    JOIN users ON users.id = favourites.user_id
  WHERE users.id = $1;
  `, [user_id]
  ).then((res) => {
    return res.rows;
  });
};

module.exports.getFavouritesByUser = getFavouritesByUser;
