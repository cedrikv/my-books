export class App {

  constructor() {
    this.books = [];
    this.bookTitle = "";
  }

  addBook() {
    this.books.push({ title: this.bookTitle });
    this.bookTitle = "";
    console.log("Book list ", this.books);
  }
}
