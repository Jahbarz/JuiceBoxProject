CREATE TABLE:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL
);


CREATE USERS:

INSERT INTO users (username, password)
VALUES
    ('albert', 'bertie99'),
    ('sandra', '2sandy4me'),
    ('glamgal', 'soglam');
    

