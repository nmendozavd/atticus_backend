# Atticus Backend Software Engineer Assessment


## How to Run Code:
* To install depedencies run: npm install
* To upload mysql schema into databse run: mysql -u root < schema.sql (password is empty) 
* To run code: npm start

## How to Test Code (API Routes):
Utilized PostMan:

GET 'http://localhost:3000/api/' - Reads all songs
* request body is empty
* returns an array with objects that includes id, name, genre, artist, length, song, and ranking.

GET 'http://localhost:3000/api/:id' - Reads song info for one song id
* request body is empty
* returns an array with one object that includes id, name, genre, artist, length, song, and ranking.

POST 'http://localhost:3000/api/' - Creates a new song 
* request body
```javascript
  {
    "name": VARCHAR (255),
    "genre": ENUM('Rock', 'Pop', 'Rap', 'R&B'),
    "artist": VARCHAR (255),
    "length": INT,
    "song": VARCHAR (2056),
    "ranking": INT(5) UNSIGNED
  }
```
PUT 'http://localhost:3000/api/:id' - Updates a song by id
* request body
```javascript 
  {
    "name": VARCHAR (255),
    "genre": ENUM('Rock', 'Pop', 'Rap', 'R&B'),
    "artist": VARCHAR (255),
    "length": INT,
    "song": VARCHAR (2056),
    "ranking": INT(5) UNSIGNED
  }
```
DELETE 'http://localhost:3000/api/:id' - Deletes a song by id
* request body is empty