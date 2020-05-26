DROP TABLE IF EXISTS users
CASCADE;


CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR(255) UNIQUE NOT NULL,
  newgames integer
  [][],
  games json,
  gender text
);