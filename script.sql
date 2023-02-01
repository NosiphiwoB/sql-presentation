create database book_store;


 CREATE TABLE book (
	id serial PRIMARY KEY,
	title VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	author_id int references author(id)
);

CREATE TABLE author (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	age VARCHAR ( 50 ) UNIQUE NOT NULL,
	race VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)



SELECT
	*
FROM
	book 
INNER JOIN author  
    ON book.author_id = author.id
WHERE
    book.author_id = 1;


drop table book;



insert into book (name) values ('Rich Dad Poor Dad');


select * from book;