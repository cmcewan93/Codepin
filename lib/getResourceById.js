
const getResourceById = (db, resource_id) => {
  return db.query(`
  SELECT *
  FROM resources
  WHERE id = $1;
  `, [resource_id]
  ).then((res) => {
    return res.rows;
  });
};

module.exports.getResourceById = getResourceById;
