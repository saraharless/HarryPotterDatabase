
const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
// require schema file
const Characters = require('./models/characterTemplates')
mongoose.Promise = require('bluebird');
// characterTemplates =  your database name.
mongoose.connect('mongodb://localhost:27017/characterTemplates');





let suffix = '';
let name = 'Pancakes' + suffix
const recipe = new Recipe({name: name, source: "Grandma"});
recipe.save()
  .then(function () {
    console.log('saved ' + name);
    return Recipe.findOne({name: "Pancakes" + suffix})
  }).then(function(results) {
    console.log('\nfindOne returned\n' + results);
    return Recipe.find({cookTime: {$gt: 15, $lt: 60}})
  }).then(function (results) {
    console.log('\n\nfind returned ' + results.length + ' results');
  }).catch(function (error) {
    console.log('error ' + JSON.stringify(error));
  })

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
