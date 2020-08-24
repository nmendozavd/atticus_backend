# Atticus Backend Software Engineer Assessment


## How to Run Code:
* To install depedencies run: <code>npm install</code> 
* To upload mysql schema into databse run: <code> mysql -u root < schema.sql </code> (no password). Otherwise run: <code> ysql -u root -p yourPassword < schema.sql </code> (insert your password)
* To run code: <code>npm start</code> (runs on port 3000)

## How to Test Code (API Routes):
**Utilized PostMan to test Endpoints**: http://localhost:3000/api/

GET '/api/' - Reads all songs
* request body is empty
* returns an array with objects that includes id, name, genre, artist, length, song, and ranking.
```javascript
[
  {
    "name": VARCHAR (255),
    "genre": ENUM('Rock', 'Pop', 'Rap', 'R&B'),
    "artist": VARCHAR (255),
    "length": INT,
    "song": VARCHAR (2056),
    "ranking": INT(5) UNSIGNED
  }
]
```
GET 'api/:id' - Reads song info for one song id
* request body is empty
* returns an array with one object that includes id, name, genre, artist, length, song, and ranking.

POST 'api/' - Creates a new song 
* request body
```javascript
[
  {
    "name": VARCHAR (255),
    "genre": ENUM('Rock', 'Pop', 'Rap', 'R&B'),
    "artist": VARCHAR (255),
    "length": INT,
    "song": VARCHAR (2056),
    "ranking": INT(5) UNSIGNED
  }
]
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

* *Decided to move forward with a regular ID to have a working product. Simply ran out of time to implement uuid. Also read that uuid was better supported with PostgreSQL instead of MYSQL towards the end of completing the application.*

* *If time permitted, I also would've implemented JEST and SuperTest to test endpoints.*