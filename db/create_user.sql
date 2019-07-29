INSERT INTO login (username, password, isadmin)
VALUES ($1, $2, $3)
RETURNING *;