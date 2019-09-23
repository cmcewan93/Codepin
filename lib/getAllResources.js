const getAllResources = (db, limit) => {
  return db.query(`
  SELECT *
  FROM resources
  LIMIT $1
  `, [limit]
  ).then((res) => {
    return res.rows;
  });
 };
 module.exports.getAllResources = getAllResources;
