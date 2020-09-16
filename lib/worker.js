const request = require('./scraper/request');
const parser = require('./scraper/parse');
const store = require('./scraper/store');

module.exports = job => {
  console.log(`About to scrape page ${job.data.page}`);
  return request(job.data.page)
    .then(parser)
    .then(store);
};
