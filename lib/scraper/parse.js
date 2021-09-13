const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.map(thisBook => {
    const img = thisBook.querySelector('.image_container img').getAttribute('src');
    const rating = thisBook.querySelector('.product_pod p').classList.item(1);
    const title = thisBook.querySelector('.product_pod h3 > a').getAttribute('title');
    const price = thisBook.querySelector('.product_pod div > p').textContent;
    const inStock = thisBook.querySelector('.availability').textContent ? true : false;

    return {
      img,
      rating,
      title,
      price,
      inStock
    };
  });
};

module.exports = parse;
