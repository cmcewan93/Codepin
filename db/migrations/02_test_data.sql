-- TEST DATA for midterm schema --

-- Users table

INSERT INTO users (name, email, password) VALUES ('Alice', 'alice@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kira', 'kira@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Colin', 'colin@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Matt', 'matt@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Alex', 'alex@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Dylan', 'dylan@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kim kardashian', 'kim123@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kyle', 'kyle@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Katherine', 'katherine321@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Michael M', 'kira123@gmail.com', 'password');

-- Resources table

INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (1, 'C#', 'Intro to C# Programming', 'C#', '2019-09-10');
INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (2, 'C++', 'Intro to C++ Programming', 'C++', '2013-02-08');
INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (3, 'OOP', 'Intro to Object Oriented Programming', 'OOP', '2019-03-07');
INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (4, 'Javascript', 'Javascript Techniques', 'Javascript', '2017-05-10');
INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (5, 'CSS', 'CSS Frameworks Tutorials', 'CSS', '2018-07-11');
INSERT INTO resources (user_id, title, description, tag, created_at)
  VALUES (6, 'HTML', 'HTML basic principles', 'HTML', '2019-07-11');


-- Comments table

INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (1, 1, 'TEST POST ASDFDSAFASFASDFSADFASFDASDFASDFASFASDFASDFAS', '2019-03-11');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (2, 2, 'TEST POST 2DSFDSjfgnasdnjfsndjkfkn;asdfknlasdfkl;n', '2018-05-11');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (3, 3, 'TEST POST 3 LOREM IOPSUM ', '2019-02-15');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (4, 4, 'TEST POST 4 HEY hi how are you bye', '2015-02-19');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (5, 5, 'TEST POST 5 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage ', '2019-08-04');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (6, 6, 'TEST POST 6 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', '2019-06-01');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (3, 7, 'TEST POST 7 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text', '2019-01-24');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (1, 8, 'TEST POST 8 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', '2019-01-26');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (4, 9, 'TEST POST 9 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet', '2017-09-14');
INSERT INTO comments (resource_id, user_id, post, post_date)
VALUES (1, 10, 'TEST POST 10 ASDFDSAFASFASDFSADFASFDASDFASDFASFASDFASDFAjgjkgklglkgS', '2019-04-23');

-- Likes table

INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (1, 1, 5, '2019-04-23');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (2, 2, 20, '2019-09-17');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (3, 3, 0, '2019-12-13');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (4, 4, 1, '2019-08-11');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (5, 6, 9, '2019-09-15');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (6, 5, 100, '2019-01-18');
INSERT INTO likes (resource_id, user_id, like_count, like_date)
VALUES (7, 7, 34, '2019-02-07');

-- Tags table

INSERT INTO tags (resource_id, category)
VALUES (1, 'C#');
INSERT INTO tags (resource_id, category)
VALUES (2, 'C++');
INSERT INTO tags (resource_id, category)
VALUES (3, 'OOP');
INSERT INTO tags (resource_id, category)
VALUES (4, 'Javascript');
INSERT INTO tags (resource_id, category)
VALUES (5, 'CSS');
INSERT INTO tags (resource_id, category)
VALUES (6, 'HTML');

-- Favourites table

INSERT INTO favourites (user_id, resource_id)
VALUES (1, 1);
INSERT INTO favourites (user_id, resource_id)
VALUES (1, 2);
INSERT INTO favourites (user_id, resource_id)
VALUES (1, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (2, 2);
INSERT INTO favourites (user_id, resource_id)
VALUES (2, 5);
INSERT INTO favourites (user_id, resource_id)
VALUES (2, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (3, 1);
INSERT INTO favourites (user_id, resource_id)
VALUES (4, 2);
INSERT INTO favourites (user_id, resource_id)
VALUES (5, 5);
INSERT INTO favourites (user_id, resource_id)
VALUES (6, 2);
INSERT INTO favourites (user_id, resource_id)
VALUES (6, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (7, 1);
INSERT INTO favourites (user_id, resource_id)
VALUES (7, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (8, 4);
INSERT INTO favourites (user_id, resource_id)
VALUES (8, 2);
INSERT INTO favourites (user_id, resource_id)
VALUES (8, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (9, 1);
INSERT INTO favourites (user_id, resource_id)
VALUES (9, 3);
INSERT INTO favourites (user_id, resource_id)
VALUES (9, 5);
INSERT INTO favourites (user_id, resource_id)
VALUES (10, 1);
INSERT INTO favourites (user_id, resource_id)
VALUES (10, 4);
INSERT INTO favourites (user_id, resource_id)
VALUES (10, 2);


