DROP TABLE IF EXISTS users_languages;

CREATE TABLE users_languages (
  user_id         integer,
  language_id     integer
);

insert into users_languages (user_id, language_id)
values (1, 2), (2, 1), (1, 1); 
