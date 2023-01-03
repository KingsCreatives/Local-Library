/* Modal */
let modalContainer = document.querySelector(".modal");
let modalOpenButton = document.querySelector(".open-modal");
let modalCloseButton = document.querySelector(".close-modal-btn");

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
    const author = createElementsForBook('p', `${this.title}`, 'author');
    bookDiv.appendChild(author);
    const pages = createElementsForBook('p', `${this.pages}`, 'pages');
    bookDiv.appendChild(pages);
    const readBtn = createElementsForBook('button', '', 'read-btn');
    readBtn.textContent = readBtn? "Read" :  "Not read";
    bookDiv.appendChild(readBtn);
    const deleteBtn = createElementsForBook('button', 'delete');
    bookDiv.appendChild(deleteBtn);
    booksContainer.insertAdjacentElement(bookDiv);
}


/* Get User Inputs*/

function userInputs(){
    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const isChecked = document.querySelector("")
}