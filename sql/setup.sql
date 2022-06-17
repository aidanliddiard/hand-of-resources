-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS fruit;

CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  origin VARCHAR 
);

CREATE TABLE fruit (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  fav_pairing VARCHAR,
  origin VARCHAR
);

INSERT INTO flowers (
  name,
  origin
)

VALUES ('Calla lily', 'South Africa'), ('Iris', 'Virginia'), ('Hydrangea', 'Japan');

INSERT INTO fruit (
  name, 
  fav_pairing,
  origin
)

VALUES ('Raspberry', 'Anything chocolate', NULL), ('Apple', 'Cheese', 'Kazakhstan'), ('Grapes', NULL, 'Asia, Europe, North America')

