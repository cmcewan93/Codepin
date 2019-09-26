DROP TABLE IF EXISTS resources CASCADE;
CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  description TEXT,
  tag VARCHAR(255),
  siteUrl VARCHAR(255),
  imgUrl VARCHAR(255),
  created_at TIMESTAMP
);
