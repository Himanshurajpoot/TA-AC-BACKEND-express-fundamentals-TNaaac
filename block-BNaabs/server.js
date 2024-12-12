let express = require('express');
let logger = require('morgan');
let app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  res.send(username);
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.json(req.body)
});

app.listen(4000, () => {
  console.log('server is listening on port 4k');
});
