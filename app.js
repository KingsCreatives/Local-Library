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
    if(this.title !== "" && this.author !== "" && this.pages !== ""){
        const bookDiv = createElementsForBook('div', '', 'book-div');
        const title = createElementsForBook('h1', `${this.title}`, 'title');
        bookDiv.appendChild(title);
        const author = createElementsForBook('p', `${this.author}`, 'author');
        bookDiv.appendChild(author);
        const pages = createElementsForBook('p', `${this.pages}`, 'pages');
        bookDiv.appendChild(pages);
        const readBtn = createElementsForBook('button', '', 'read-btn');
        this.checkReadStatus(readBtn,bookDiv);
        bookDiv.appendChild(readBtn);
        const deleteBtn = createElementsForBook('button', 'Delete');
        bookDiv.appendChild(deleteBtn);
        this.removeBookFromLibrary(deleteBtn,bookDiv);
        booksContainer.insertAdjacentElement('afterbegin',bookDiv);
    }
}


/*Check Read Status */
Book.prototype.checkReadStatus = function(button, booksDiv){  
    let checkbox = document.querySelector("#checkbox");
    if(checkbox.checked === true){
        button.textContent = "Done Reading"
        booksDiv.classList.add("read");
    } else{
        button.textContent = "Still Reading"
    }

    /* Toggle Read Status */
    button.addEventListener("click", function(){
        if(button.textContent === "Done Reading"){
         button.textContent = "Still Reading";
         booksDiv.classList.remove("read");
         }
         else{
            button.textContent = "Done Reading";
            booksDiv.classList.add("read");
         }
    })
}

/* Remove Book from Library*/
Book.prototype.removeBookFromLibrary = function(button, div){
    button.addEventListener("click", function(){
        myLibrary.splice(div, 1);
        booksContainer.removeChild(div);
        saveToLocalStorage();
    })
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
    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        modalContainer.style.display = "none";
        userInputs();
        saveToLocalStorage();
        renderBook();
        addBookForm.reset();
    })
}


/*Save Book To Local Storage*/
 function saveToLocalStorage(){
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
 }

 /* Retrieve Book From Local Storage*/
 function retrieveBooksFromLocalStorage(){
    let books = localStorage.getItem(`myLibrary`);
    books = JSON.parse(books);
    myLibrary = books;
    renderBook();
 }


/* Render book */
function renderBook(){
    if(myLibrary.length > 0){
        myLibrary[myLibrary.length-1].createBookCard();
    }
}

addToLibrary();
retrieveBooksFromLocalStorage()