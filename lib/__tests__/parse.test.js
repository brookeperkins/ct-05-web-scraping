const request = require('../scraper/request');
const parse = require('../scraper/parse');

describe('parse function', () => {
  it('returns an array of all book objects', async() => {
    const document = await request();
    const books = parse(document);

    expect(books).toEqual(expect.arrayContaining([
      { 
        title: 'A Light in the Attic',
        img: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
        rating: 'Three',
        price: '£51.77',
        inStock: true
      },
      { 
        img: 'media/cache/be/a5/bea5697f2534a2f86a3ef27b5a8c12a6.jpg',
        rating: 'Five',
        title: 'Sapiens: A Brief History of Humankind',
        price: '£54.23',
        inStock: true
      }
    ]));
  });
});
