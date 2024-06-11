const page = document.querySelector(".page");
const books = document.querySelector(".books");
const addBtn = document.querySelector(".add");
const backgroundPopUp = document.createElement("div");
const popUp = document.createElement("div");
const form = document.createElement("form");
const readCont = document.createElement("div");
let errorMessages = document.createElement("div");
const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
form.classList.add("form");
const labelBookName = document.createElement("label");
labelBookName.setAttribute("for", "book-name");
labelBookName.classList.add("label");
labelBookName.innerText = "Book Name:";
const inputBookName = document.createElement("input");
inputBookName.setAttribute("type", "text");
inputBookName.classList.add("input");
inputBookName.setAttribute("name", "book-name");
const labelAuthorName = document.createElement("label");
labelAuthorName.setAttribute("for", "author-name");
labelAuthorName.classList.add("label");
labelAuthorName.innerText = "Author Name:";
const inputAuthorName = document.createElement("input");
inputAuthorName.setAttribute("type", "text");
inputAuthorName.classList.add("input");
inputAuthorName.setAttribute("name", "author-name");
const labelPages = document.createElement("label");
labelPages.setAttribute("for", "pages");
labelPages.classList.add("label");
labelPages.innerText = "Pages:";
const inputPages = document.createElement("input");
inputPages.setAttribute("type", "number");
inputPages.classList.add("input");
inputPages.setAttribute("name", "pages");
const labelRead = document.createElement("label");
labelRead.setAttribute("for", "read");
labelRead.classList.add("label");
labelRead.innerText = "Have you read the book?";
const inputRead = document.createElement("input");
inputRead.setAttribute("type", "checkbox");
inputRead.setAttribute("value", "read");
inputRead.classList.add("input");
inputRead.setAttribute("name", "read");
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("form", "form");
submitBtn.setAttribute("value", "Submit");
submitBtn.classList.add("submit");
submitBtn.innerText = "Submit";
backgroundPopUp.classList.add("background-popup");
popUp.classList.add("popup");
addBtn.addEventListener("click", () => {
  page.appendChild(backgroundPopUp);
  backgroundPopUp.appendChild(popUp);
  popUp.appendChild(form);
  form.appendChild(labelBookName);
  form.appendChild(inputBookName);
  form.appendChild(labelAuthorName);
  form.appendChild(inputAuthorName);
  form.appendChild(labelPages);
  form.appendChild(inputPages);
  form.appendChild(readCont);
  readCont.appendChild(labelRead);
  readCont.appendChild(inputRead);
  form.appendChild(errorMessages);
  form.appendChild(submitBtn);
});
submitBtn.addEventListener("click", () => {
  const bookNameValue = inputBookName.value.trim();
  const authorNameValue = inputAuthorName.value.trim();
  const pagesValue = inputPages.value.trim();
  if (bookNameValue === "") {
    errorMessages.innerText = "Book name is required.";
    return;
  }
  if (authorNameValue === "") {
    errorMessages.innerText = "Author name is required.";
    return;
  }
  if (pagesValue == "") {
    errorMessages.innerText =
      "Number of pages is required and must be anumber.";
    return;
  }
  const title = inputBookName.value.toString();
  const author = inputAuthorName.value.toString();
  const pages = inputPages.value;
  let read = "Not Read";
  if (inputRead.checked) read = "Read";
  const book = Book(title, author, pages, read);
  addBookToLibrary(book);
  backgroundPopUp.remove();
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  books.appendChild(bookCard);
  const cardText = document.createElement("div");
  const contForContent = document.createElement("div");
  const deleteBtnCont = document.createElement("div");
  deleteBtnCont.classList.add("delete-btn-cont");
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  const deleteSvg = document.createElement("img");
  deleteSvg.setAttribute("src", "img/delete-svgrepo-com.svg");
  deleteSvg.setAttribute("alt", "Delete Button");
  deleteSvg.classList.add("delete-img");
  deleteBtn.appendChild(deleteSvg);
  cardText.classList.add("card-text");
  let bookName = document.createElement("div");
  bookName.classList.add("title");
  bookName.innerText = title;
  let authorName = document.createElement("div");
  authorName.classList.add("author");
  authorName.innerText = "By " + author;
  let numberOfPages = document.createElement("div");
  numberOfPages.classList.add("pages");
  numberOfPages.innerText = "Pages: " + pages;
  let readBtn = document.createElement("button");
  readBtn.classList.add("read");
  readBtn.innerText = read;
  if (readBtn.innerText == "Read") {
    readBtn.style.backgroundColor = "#339966";
  } else readBtn.style.backgroundColor = "#669999";
  bookCard.appendChild(deleteBtnCont);
  bookCard.appendChild(cardText);
  deleteBtnCont.appendChild(deleteBtn);
  cardText.appendChild(contForContent);
  contForContent.appendChild(bookName);
  contForContent.appendChild(authorName);
  cardText.appendChild(numberOfPages);
  cardText.appendChild(readBtn);
  deleteBtn.addEventListener("click", () => {
    bookCard.remove();
  });
  readBtn.addEventListener("click", () => {
    if (readBtn.innerText == "Read") {
      readBtn.innerText = "Not Read";
      readBtn.style.backgroundColor = "#669999";
    } else {
      readBtn.innerText = "Read";
      readBtn.style.backgroundColor = "#339966";
    }
  });
});
let library = [];
function Book(title, author, pages, read) {
  let book = {};
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.read = read;
  return book;
}
function addBookToLibrary(book) {
  library.push(book);
}
