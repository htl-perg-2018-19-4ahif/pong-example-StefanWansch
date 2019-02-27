import express = require('express');
import path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

const port = 8090;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));