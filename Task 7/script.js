/* ------------------------------ TASK 7 -----------------------------------
Turimas "book" objektas apibūdinantis knygą.

Parašykite funkciją "getBookInfo", kuri priims objektą su knygos duomenimis 
(ir pavadinimu, ir autorių) kaip argumentą ir grąžins eilutę, kurioje bus 
knygos pavadinimas ir autorius atskirti kableliu.

Pavyzdinis objektas:
const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
};

Funkcijos kvietimas:
getBookInfo(book);

Grąžinama reikšmė:
'The Great Gatsby, F. Scott Fitzgerald'
-------------------------------------------------------------------------- */

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};

function getBookInfo(book) {
  const bookInfo = `${book.title}, ${book.author}`;
  console.log(bookInfo);
  return bookInfo;
}
getBookInfo(book);
