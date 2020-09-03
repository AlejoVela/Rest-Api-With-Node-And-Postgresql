CREATE DATABASE firstapi;
\c firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('joe', 'joe@ibm.com'),
    ('rayan', 'rayan@gmail');