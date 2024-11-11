const myLibrary = []
const table = document.querySelector("#library-table-body");

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${numPages} page${numPages > 1 ? "s" :""}, ${read ? "read" : "not read yet"}.`;
  }

  this.createRow = function() {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");

    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.numPages.toString();
    if (this.read) {
      read.textContent = "read";
    } else {
      read.textContent = "unread";
    }

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);

    return row;
  }
}

function addBookToLibrary(title, author, numPages, read) {
  myLibrary.push(new Book(title, author, numPages, read));
}

function displayLibrary() {
  for (const book of myLibrary) {
    console.log(book.info());
    table.appendChild(book.createRow());
  }
}

addBookToLibrary("title1", "author1", 1, true);
addBookToLibrary("title2", "author2", 2, false);

displayLibrary();