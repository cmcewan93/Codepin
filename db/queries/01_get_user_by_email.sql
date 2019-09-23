-- Returns number of users with specified email and password, (1 means successfull login)

 SELECT id, name, email, password
    FROM users
    WHERE email = 'test@gmail.com';
    