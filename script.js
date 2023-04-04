/* eslint-disable operator-linebreak */
const books = [];
const main = document.querySelector('.main');
const formContainer = document.querySelector('.form-container');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function deleteBook(e) {
  const bookToDelete = e.target.parentElement.firstChild.textContent;
  const itemToRemoveIndex = books.findIndex(
    (item) => item.name === bookToDelete
  );

  // proceed to remove an item only if it exists.
  if (itemToRemoveIndex !== -1) {
    books.splice(itemToRemoveIndex, 1);
  }
  e.target.parentNode.remove();
  console.log(books);
}
function toggleRead(e) {
  e.target.classList.toggle('notRead');
  if (e.target.textContent === 'Read') {
    e.target.textContent = 'Not Read';
    console.log(e.target);
  } else {
    e.target.textContent = 'Read';
    console.log(e.target);
  }
}
function createBookCard(currBook) {
  const cards = document.querySelector('.cards');
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const namePara = document.createElement('p');
  const authorPara = document.createElement('p');
  const pagesPara = document.createElement('p');
  const readBtn = document.createElement('button');
  namePara.textContent = currBook.name;
  authorPara.textContent = `By ${currBook.author}`;
  pagesPara.textContent = `${currBook.pages} Pages`;
  readBtn.textContent = currBook.read ? 'Read' : 'Not Read';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('class', 'deleteBtn');
  readBtn.addEventListener('click', toggleRead);
  deleteBtn.addEventListener('click', deleteBook);
  readBtn.setAttribute('class', 'readBtn');
  if (readBtn.textContent === 'Not Read') {
    readBtn.classList.add('notRead');
  }
  card.appendChild(namePara);
  card.appendChild(authorPara);
  card.appendChild(pagesPara);
  card.appendChild(readBtn);
  card.appendChild(deleteBtn);
  cards.append(card);
}

function hideForm() {
  main.classList.remove('main-inactive');
  formContainer.classList.remove('form-active');
}
function displayForm() {
  main.classList.add('main-inactive');
  formContainer.classList.add('form-active');
}

function displayBooks() {
  for (let i = 0; i < books.length; i++) {
    createBookCard(books[i]);
  }
}

function addBooksToLibrary(e) {
  e.preventDefault();
  const bookName = document.querySelector('#name').value;
  const authorName = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(bookName, authorName, pages, read);
  books.push(book);
  const form = document.querySelector('form');
  form.reset();
  hideForm();
  createBookCard(book);
  console.log(books);
}

function eventListeners() {
  const addBookBtn = document.querySelector('.addBook>button');
  const closeBtn = document.querySelector('.closeBtn');
  const readBtns = document.querySelectorAll('.readBtn');
  const deleteBtns = document.querySelectorAll('.deleteBtn');

  addBookBtn.addEventListener('click', displayForm);

  document.addEventListener('click', (e) => {
    if (
      e.target.parentElement.className !== 'addBook' &&
      document.querySelector('.form-active') &&
      !formContainer.contains(e.target)
    ) {
      hideForm();
    }
  });
  closeBtn.addEventListener('click', hideForm);

  const form = document.querySelector('form');
  form.addEventListener('submit', addBooksToLibrary);

  readBtns.forEach((btn) => {
    btn.addEventListener('click', toggleRead);
  });

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', deleteBook);
  });
}

const book3 = new Book('Wuthering Heights', 'Emily Bronte', 400, 1);
books.push(book3);
console.log(books);
displayBooks();

eventListeners();
