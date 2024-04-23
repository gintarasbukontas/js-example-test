/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Book" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, author, pageCount
Metodas: 
isLong() - jeigu knygos puslapių skaičius bus daugiau nei 500, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
  }
  isLong() {
    if (this.pageCount > 500) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
}
const book1 = new Book("Testas", "Jonas", 501);
book1.isLong();
