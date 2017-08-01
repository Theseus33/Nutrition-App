const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride =require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use.(passport.session());

app.use(express.static('public'));

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.render('index', {
    message: 'fix this',
    currentPage: 'home',
  });
});

const nutriRoutes = require('./routes/nurti-routes');
app.use('/auth', nutriRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
});
