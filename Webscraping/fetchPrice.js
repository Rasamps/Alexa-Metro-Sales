const request = require('request'); //Adding the libraries required.
const cheerio = require('cheerio');

const food = "apples";

request('https://www.metro.ca/en/search?filter='+food+'&freeText=true', (error, response, html) => {
  if (!error && response.statusCode ==200) {
    const $ = cheerio.load(html);


    // const searchInput = $('.products-tile-list__tile');
    // const saleItems =  searchInput.find('.pi-sale-price').find('.pi-price-promo');

    var saleItems = [];

    $('.pi-sale-price').each((i,el) => {
      const saleItem = $(el)
        .find('.pi-price-promo')
        .text();
      if (saleItem != '') saleItems.push(saleItem);
    });
    console.log(saleItems);

  //   $('.products-tile-list__tile').each((i, item) => {
  //     const product = $(item).
  //   });
  // }
}
});
