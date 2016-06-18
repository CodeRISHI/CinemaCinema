var express = require('express');
var bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 8080;

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// LISTEN
// ==============================================
console.log(`CinemaCinema is listening on ${port}`);

app.listen(port);

module.exports = app;