/* Modal */
let modalContainer = document.querySelector(".modal");
let modalOpenButton = document.querySelector(".open-modal");
let modalCloseButton = document.querySelector(".close-modal-btn");
let addBookForm = document.querySelector(".add-book-form");

/*Open Modal On click */
modalOpenButton.onclick = function (){
    modalContainer.style.display = "block";
}


/* Close Modal Button On Click*/
modalCloseButton.onclick = function () {
    modalContainer.style.display = " none";
}

/*Close Modal If window is selected*/
window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}


/* Library*/
let myLibrary = [];
let booksContainer = document.querySelector(".book-container");


/* Book Constructor*/
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* Creates Elements needed for book*/
function createElementsForBook(element, content, className){
    const bookElement = document.createElement(element);
    bookElement.textContent = content;
    bookElement.classList = className;
    return bookElement;
}

/*Creating Book*/
Book.prototype.createBookCard = function () {
    const bookDiv = createElementsForBook('div', '', 'book-div');
    const title = createElementsForBook('h1', `${this.title}`, 'title');
    bookDiv.appendChild(title);
    const author = createElementsForBook('p', `${this.author}`, 'author');
    bookDiv.appendChild(author);
    const pages = createElementsForBook('p', `${this.pages}`, 'pages');
    bookDiv.appendChild(pages);
    const readBtn = createElementsForBook('button', '', 'read-btn');
    bookDiv.appendChild(readBtn);
    const deleteBtn = createElementsForBook('button', 'delete');
    bookDiv.appendChild(deleteBtn);
    booksContainer.insertAdjacentElement('afterbegin',bookDiv);
}


function checkReadStatus (){
    const checkbox = document.getElementById('checkbox');
    const readButton = document.querySelector('.read-btn');
    const bookDiv = document.querySelector('.book-div');
     if(checkbox.checked === true){
         readButton.textContent = "Done Reading";
         bookDiv.classList.add = "read";
        }
       /* else{
        readButton.textContent = "Still reading";
        }
}


/* Get User Inputs*/

function userInputs(){
    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const isChecked = document.querySelector("#checkbox").checked;
    const myBook = new Book(bookTitle, bookAuthor, bookPages, isChecked);
    myLibrary.push(myBook);
}


/* Add book to Library*/
function addToLibrary(){
    const submitBtn = document.querySelector(".submit-btn");
    checkReadStatus()
    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        modalContainer.style.display = "none";
        userInputs();
        renderBook()
    })
    addBookForm.reset()
}



/* Render book */
function renderBook(){
    addToLibrary();
    if(myLibrary.length > 0){
        myLibrary[myLibrary.length-1].createBookCard();
    }
}

renderBook();
