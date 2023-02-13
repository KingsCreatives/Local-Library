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


/*Book Class*/
class Book {
    constructor (title, author, pages, read) {
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.read = read;
    };

    //Book Card
    createBookCard (){
        if(this.title !== "" && this.author !== "" && this.pages !== ""){
            const bookDiv = createElementsForBook('div', '', 'book-div');
            const title = createElementsForBook('h4', `Title: ${this.title}`, 'title');
            bookDiv.appendChild(title);
            const author = createElementsForBook('p', `By:  ${this.author}`, 'author');
            bookDiv.appendChild(author);
            const pages = createElementsForBook('p', `Pages:  ${this.pages}`, 'pages');
            bookDiv.appendChild(pages);
            const readBtn = createElementsForBook('button', '', 'read-btn');
            this.checkReadStatus(readBtn,bookDiv);
            bookDiv.appendChild(readBtn);
            const deleteBtn = createElementsForBook('button', 'Delete');
            bookDiv.appendChild(deleteBtn);
            this.removeBook(deleteBtn,bookDiv);
            booksContainer.insertAdjacentElement('afterbegin',bookDiv);
        }
    };

    //Check Book is Read or Not
    checkReadStatus(button, booksDiv){
        let checkbox = document.querySelector("#checkbox");
        if(checkbox.checked === true || this.read === true){
            button.textContent = "Done Reading"
            booksDiv.classList.add("read");
        } else{
            this.read = false;
            button.textContent = "Still Reading";
        }
    
        
    
        /* Toggle Read Status */
        button.addEventListener("click", function(){
             booksDiv.classList.toggle("read");
             button.textContent === "Done Reading"? this.read = true : this.read = false;
            if(this.read === true){
                this.read = false;
                button.textContent = "Still Reading";
             }
             else{
                button.textContent = "Done Reading";
                this.read = true;
             }
        })
        saveToLocalStorage();
    };

    //Remove Book From Library
    removeBook(button,div){
        button.addEventListener("click", function(){
            myLibrary.splice(div, 1);
            booksContainer.removeChild(div);
            saveToLocalStorage();
        })
    }
}
/* Creates Elements needed for book*/
function createElementsForBook(element, content, className){
    const bookElement = document.createElement(element);
    bookElement.textContent = content;
    bookElement.classList = className;
    return bookElement;
}


/* Get User Inputs*/
function userInputs(){
    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const isChecked = document.querySelector("#checkbox").checked;
    if(bookTitle === " " || bookAuthor === " " || bookPages === " ")return;
    else{
        const myBook = new Book(bookTitle, bookAuthor, bookPages, isChecked);
        myLibrary.push(myBook);
    }
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
    let libraryJSON = localStorage.getItem(`myLibrary`);
    let booksArray = JSON.parse(libraryJSON);

    if(booksArray === null) return;

    booksArray.forEach(({title, author, pages, read}) => {
        const book = new Book(title,author,pages,read);
        myLibrary.push(book);
        book.createBookCard();
    })

 }


/* Render book */
function renderBook(){
    if(myLibrary.length > 0){
        myLibrary[myLibrary.length-1].createBookCard();
    }
}

addToLibrary();
retrieveBooksFromLocalStorage();