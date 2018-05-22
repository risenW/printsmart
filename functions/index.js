
const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const firebase = require('firebase-admin');
var expressHbs = require('express-handlebars');
//Routes 
const routes = require('./routes/helper');

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
)

const app = express();

//View engines
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Cached version of home page
app.get('/', routes.home);  



  exports.app = functions.https.onRequest(app);