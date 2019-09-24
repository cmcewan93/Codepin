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


// SELECT resources.*, likes.like_count, count(comments.*) as post_count
// FROM resources
//   JOIN likes ON resources.id = likes.resource_id
//   JOIN comments ON resources.id = comments.resource_id
// GROUP BY resources.id, likes.like_count;
