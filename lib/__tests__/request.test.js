const request = require('../scraper/request');

describe('request function', () => {
  it ('makes a request to the BooksToScrape page and returns html', async() => {
    const document = await request(1);
    expect(document.querySelector('h1').textContent).toEqual('All products');
  });
});
