const myLibrary = []

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;

   this.info = function() {
    return `${this.title} by ${this.author}, ${numPages} pages, ${read ? "read" : "not read yet"}.`;
  }
}

function addBookToLibrary(title, author, numPages, read) {
  myLibrary.push(new Book(title, author, numPages, read));
}

function displayLibrary() {
  for (const book of myLibrary) {
    console.log(book.info());
  }
}