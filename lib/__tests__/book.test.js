const fs = require('fs');
const Book = require('../models/book');
const pool = require('../utils/pool');

describe('Book model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('inserts a new Book into the database', async() => {
    const createdBook = await Book.insert({
      img: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
      rating: 'Three',
      title: 'A Light in the Attic',
      price: '£51.77',
      inStock: true
    });
  
    const { rows } = await pool.query(
      'SELECT * FROM Books WHERE id = $1',
      [createdBook.id]
    );
  
    expect(rows[0]).toEqual({
      id: '1',
      img: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
      rating: 'Three',
      title: 'A Light in the Attic',
      price: '£51.77',
      in_stock: true
    });
  });
});
