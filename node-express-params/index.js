const express = require('express');
const bodyParser = require('body-parser');

const mainCtrl = require('./mainCtrl');

const app = express();

app.get('/api/user', mainCtrl.name);


const port = 3333;
app.listen(port, () => {
  console.log('listening on port:', port);
})
