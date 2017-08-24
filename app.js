
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
// require schema file
const characterTemplate = require('./models/characterTemplate.js')
mongoose.Promise = require('bluebird');
// characterTemplate =  your database name.
mongoose.connect('mongodb://localhost:27017/characterTemplatedb');

app.engine('mustache',mustacheExpress());
app.set('views','./views');
app.set('view engine','mustache');
app.use(bodyParser.urlencoded({
  extended:false
}))



app.get('/', function(req,res) {
  characterTemplate.find()
  .then(function(cast) {
    res.render('characterProfiles', {characters : cast})
  })
  .catch(function(error) {
    console.log('error' + JSON.stringify(error));
  })
})

console.log('hello')

app.post('/', function(req, res) {
  let name = req.body.name
  const naming = new characterTemplate({
    name: name
  })

  naming.save().then(function(results) {
    console.log('saved ' + results);
    return characterTemplate.find()
  })
  .then(function(names) {
    console.log(names);
    res.render('characterProfiles', {
      characters: names
    })
  })
  .catch(function(error,names) {
    console.log('error ' + JSON.stringify(error));
    res.redirect('/')
  })
})

app.post('/:id', function(req, res) {
  let id = req.params.id;
  characterTemplate.deleteOne({
    _id: new ObjectId(id)
  })
  .then(function() {
    res.redirect('/')
  })
  .catch(function(error,names) {
    console.log('error ' + JSON.stringify(error));
    res.redirect('/')
})
})
app.listen(3000, function() {
  console.log('you did it, or something');
})

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
