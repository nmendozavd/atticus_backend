const express = require('express');
const db = require('../database/db.js');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const route = require('./router/index')


app.use(cors());
app.use(express.json());

app.use('/api', route)

app.listen(port, () => console.log(`Songs server is listening on port ${port}!\n`))