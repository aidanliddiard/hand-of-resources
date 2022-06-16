-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS flowers;

CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  origin VARCHAR 
);

INSERT INTO flowers (
  name,
  origin
)

VALUES ('Calla lily', 'South Africa'), ('Iris', 'Virginia'), ('Hydrangea', 'Japan')
