DROP DATABASE IF EXISTS popQuiz;
CREATE DATABASE popQuiz;
USE popQuiz;
CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);