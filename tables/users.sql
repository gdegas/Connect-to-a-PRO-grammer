DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id      serial,
  username      varchar(40) not null,
  password      varchar not null,
  mentor        boolean,
  picture       text,
  UNIQUE(username)
);

insert into users (username, password, mentor)
values ('gdegas', 'password123', true),
('killerkam', 'booboobang', false),
('kittymewmew', 'Ghoulish1!', true);
