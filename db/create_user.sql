INSERT INTO login (firstname, lastname, username, password, email, isadmin)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;