-- up
CREATE TABLE languages(
  id        serial,
  name      text
);

INSERT INTO languages(name)
VALUES ('javascript', 'html', 'sql')

---
DROP TABLE IF EXISTS languages;
-- down
