const myLibrary = []
const table = document.querySelector("#library-table-body");
const dialog = document.querySelector("#new-book-dialog");
const form = document.querySelector("form");
const submitButton = document.querySelector("#form-submit");
const closeButton = document.querySelector("#form-close");
const dialogButton = document.querySelector("#new-book-button");

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

function addBookToLibrary(book) {
  myLibrary.push(book);
  table.appendChild(book.createRow());
}

function displayLibrary() {
  for (const book of myLibrary) {
    console.log(book.info());
  }
}

function handleSubmit() {
  const title = document.querySelector("#form-title").value;
  const author = document.querySelector("#form-author").value;
  const pages = parseInt(document.querySelector("#form-pages").value);
  const read = document.querySelector("#form-read").checked;

  addBookToLibrary(new Book(title, author, pages, read));
}

submitButton.addEventListener("click", function (event){
  event.preventDefault();
  handleSubmit();
});

closeButton.addEventListener("click", function () {
  dialog.close();
})

dialogButton.addEventListener("click", function () {
  dialog.showModal();
})

addBookToLibrary(new Book("title1", "author1", 1, true));
addBookToLibrary(new Book("title2", "author2", 2, false));

displayLibrary();