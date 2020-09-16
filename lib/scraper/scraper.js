const request = require('./request');
const parse = require('./parse');
const store = require('./store');

request()
  .then(document => parse(document))
  .then(books => store(books))
  .then(books => console.log(books.length));
