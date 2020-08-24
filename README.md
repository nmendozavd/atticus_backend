# Atticus Backend Software Engineer Assessment


## How to Run Code:
* To install depedencies run: npm install
* To upload mysql schema into databse run: mysql -u root < schema.sql (no password). Otherwise run: mysql -u root -p yourPassword < schema.sql (insert your password)
* To run code: npm start (runs on port 3000)

## How to Test Code (API Routes):
**Utilized PostMan to test Endpoints**: http://localhost:3000/api/

GET '/api/' - Reads all songs
* request body is empty
* returns an array with objects that includes id, name, genre, artist, length, song, and ranking.

GET 'api/:id' - Reads song info for one song id
* request body is empty
* returns an array with one object that includes id, name, genre, artist, length, song, and ranking.

POST 'api/' - Creates a new song 
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
PUT '/api/:id' - Updates a song by id
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
DELETE '/api/:id' - Deletes a song by id
* request body is empty


* If time was permitted, also wanted to implement JEST and SuperTest to test endpoints *