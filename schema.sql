-- CREATE DATABASE IF NOT EXISTS SDC;

USE atticus;

CREATE TABLE IF NOT EXISTS songs (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255),
  genre ENUM('Rock', 'Pop', 'Rap', 'R&B') NOT NULL,
  artist VARCHAR (255),
  length 
  song VARCHAR (2056),
  ranking INT(5) UNSIGNED NOT NULL,

  PRIMARY KEY(host_id)
);