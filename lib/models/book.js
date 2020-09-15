const pool = require('../utils/pool');

class Book {
  id;
  img;
  rating;
  title;
  price;
  in_stock;

  constructor(row) {
    this.id = row.id;
    this.img = row.img;
    this.rating = row.rating;
    this.title = row.title;
    this.price = row.price;
    this.inStock = row.in_stock; 
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, img, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.title, book.img, book.rating, book.price, book.inStock]
    );
  
    return new Book(rows[0]);
  }
}

module.exports = Book;
