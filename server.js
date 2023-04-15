const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'portfolio/build')));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
