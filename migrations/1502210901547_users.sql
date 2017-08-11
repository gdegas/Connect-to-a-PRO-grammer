-- up
CREATE TABLE users (
  id      serial,
  username      text,
  password      text,
  mentor        boolean,
  picture       text,
  UNIQUE(username)
);

insert into users (username, password, mentor)
values ('gdegas', 'password123', true),
      ('killerkam', 'booboobang', false),
      ('kittymewmew', 'Ghoulish1!', true);
---
DROP TABLE IF EXISTS users;
-- down
