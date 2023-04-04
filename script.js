const books = [];
const main = document.querySelector('.main');
const formContainer = document.querySelector('.form-container');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const book1 = new Book('1984', 'George Orwell', 385, 1);
const book2 = new Book('Pride and Prejudice', 'Jane Austen', 532, 0);

books.push(book1);
books.push(book2);

function createBook(currBook) {
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
  readBtn.setAttribute('class', 'readBtn');
  card.appendChild(namePara);
  card.appendChild(authorPara);
  card.appendChild(pagesPara);
  card.appendChild(readBtn);
  card.appendChild(deleteBtn);
  cards.append(card);
}

const book3 = new Book('Wuthering Heights', 'Emily Bronte', 400, 1);
function displayBooks() {
  for (let i = 0; i < books.length; i++) {
    createBook(books[i]);
  }
}

function eventListeners() {
  const addBookBtn = document.querySelector('.addBook>button');
  const closeBtn = document.querySelector('.closeBtn');
  const submitBtn = document.querySelector('.submitBtn');
  addBookBtn.addEventListener('click', () => {
    main.classList.add('main-inactive');
    formContainer.classList.add('form-active');
  });

  document.addEventListener('click', (e) => {
    if (
      e.target.parentElement.className !== 'addBook' &&
      document.querySelector('.form-active') &&
      !formContainer.contains(e.target)
    ) {
      console.log(e.target);
      formContainer.classList.remove('form-active');
      main.classList.remove('main-inactive');
    }
  });
  closeBtn.addEventListener('click', () => {
    formContainer.classList.remove('form-active');
    main.classList.remove('main-inactive');
  });
}



displayBooks();
createBook(book3);
eventListeners();
