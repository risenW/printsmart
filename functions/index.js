
const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const firebase = require('firebase-admin');

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
)

const app = express();

//View engines
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Cached version of home page
app.get('/', (request,response) => {
    response.render('index');
    // response.render('maintenance');

  });


  
  exports.app = functions.https.onRequest(app);