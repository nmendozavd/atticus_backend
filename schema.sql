CREATE DATABASE IF NOT EXISTS atticus;

USE atticus;

CREATE TABLE IF NOT EXISTS songs (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255),
  genre ENUM('Rock', 'Pop', 'Rap', 'R&B') NOT NULL,
  artist VARCHAR (255),
  length INT NOT NULL,
  song VARCHAR (2056),
  ranking INT(5) UNSIGNED NOT NULL,

  PRIMARY KEY(id)
);

-- Decided to move forward with a regular ID to have a working product. Simply ran out of time to implement uuid. Also read that uuid was better supported with PostgreSQL instead of MYSQL.