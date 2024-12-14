// require
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let app = express();


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger('dev'));
app.use(cookieParser());


app.use((req, res, next) => {
    res.cookie('count', 1);
    next();
  });
   
// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h2>${username}</h2>`);
  });  


//404 middleware
app.use((req, res, next) => {
  res.send('page not found');
});

// custom middleware
app.use((err, req, res, next) => {
  res.send(err);
});

// lestener
app.listen(3000, () => {
  console.log('server is listening on port 3k');
});


// hello