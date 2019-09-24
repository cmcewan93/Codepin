const searchByTag = (db, tag) => {
  return db.query(`
  SELECT *
  FROM resources
  WHERE tag = $1
  `, [tag]
  ).then((res) => {
    return res.rows;
  });
};

module.exports.searchByTag = searchByTag;
