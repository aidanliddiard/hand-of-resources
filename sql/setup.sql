-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS fruits;
DROP TABLE IF EXISTS veggies;
DROP TABLE IF EXISTS trees;

CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  origin VARCHAR 
);

CREATE TABLE fruits (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  fav_pairing VARCHAR,
  origin VARCHAR
);

CREATE TABLE veggies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  type VARCHAR
);

CREATE TABLE trees (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  evergreen BOOLEAN
);

INSERT INTO flowers (
  name,
  origin
)

VALUES ('Calla lily', 'South Africa'), ('Iris', 'Virginia'), ('Hydrangea', 'Japan');

INSERT INTO fruits (
  name, 
  fav_pairing,
  origin
)

VALUES ('Raspberry', 'Anything chocolate', NULL), ('Apple', 'Cheese', 'Kazakhstan'), ('Grapes', NULL, 'Asia, Europe, North America');

INSERT INTO veggies (
  name,
  type
)

VALUES ('Cauliflower', 'Cruciferous'), ('Bell Pepper', NULL), ('Cucumber', 'Marrow'), ('Arrugalua', 'Leafy Green');

INSERT INTO trees (
  name,
  evergreen
)

VALUES ('Dogwood', false), ('Redwood', true), ('Birch', false) 