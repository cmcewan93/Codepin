 SELECT favourites.id as favourite_id, users.id as user_id, resources.id as resource_id, resources.siteUrl as siteUrl, resources.title as title, resources.description as description, resources.imgUrl as imgurl, resources.created_at as created_at
  FROM favourites
    JOIN resources ON resources.id = favourites.resource_id
    JOIN users ON users.id = favourites.user_id
  WHERE users.id = 1;