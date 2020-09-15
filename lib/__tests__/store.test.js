const fs = require('fs');
const pool = require('../utils/pool');
const store = require('../store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('takes an array of books and saves them in the db', async() => {
    const books = [
      {
        img: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
        rating: 'Three',
        title: 'A Light in the Attic',
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
    ];
  
    await store(books);
  
    const { rows } = await pool.query('SELECT * FROM books');
  
    expect(rows).toHaveLength(2);
  });
});
