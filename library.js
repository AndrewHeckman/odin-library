const myLibrary = []
const table = document.querySelector("#library-table-body");
const dialog = document.querySelector("#new-book-dialog");
const form = document.querySelector("form");
const submitButton = document.querySelector("#form-submit");
const closeButton = document.querySelector("#form-close");
const dialogButton = document.querySelector("#new-book-button");

let counter = 0;

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
    const readButton = document.createElement("button");

    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.numPages.toString();
    if (this.read) {
      readButton.textContent = "Read";
    } else {
      readButton.textContent = "Unread";
    }

    readButton.addEventListener("click", toggleRead);
    read.appendChild(readButton)
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);

    row.setAttribute("data-index", counter)
    return row;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  table.appendChild(book.createRow());
  counter++;
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

function toggleRead(event) {
  const button = event.target;
  const row = button.parentElement.parentElement.getAttribute("data-index");
  const index = parseInt(row);

  if (myLibrary[index].read) {
    button.textContent = "Unread";
    myLibrary[index].read = false;
  }
  else {
    button.textContent = "Read";
    myLibrary[index].read = true;
  }
}

function deleteBook(event) {

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