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

/* */
window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}



/* Library*/
let myLibrary = [
    { 
        title: "love in the sky",
        author: "Kofi Babon",
        pages: 3300,
        read: true
    },
    {
        title: "loooo",
        author: "loiuuyyy",
        pages: 300,
        read: true
    },
    {
        title: "cara yiu",
        author: "palacious",
        pages: 300,
        read: false
    },
    {
        title: "loooo",
        author: "loiuuyyy",
        pages: 300,
        read: false
    }
];








/* Book Constructor*/
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.floor(Math.random() * 1000);
}

/* Creates Elements needed for book*/
function createElementsForBook(element, content, className,type){
    const bookElement = document.createElement(element);
    bookElement.textContent = content;
    bookElement.classList = className;
    bookElement.type = type;
    return bookElement;
}





/* Creating Each Book Card*/
function createBook(book,index){
    const bookContainer = document.querySelector(".book-container");
    const bookDiv = createElementsForBook('div', "", "book-div", '');
    bookDiv.setAttribute('id', index);
    bookDiv.setAttribute('key', index);
    bookDiv.appendChild(createElementsForBook('h1',`${book.title}`, 'title',''));
    bookDiv.appendChild(createElementsForBook('p',`By: ${book.author}`, 'author',''));
    bookDiv.appendChild(createElementsForBook('p',`Pages: ${book.pages}`, 'author',''));
    bookDiv.appendChild(createElementsForBook('button','not read', 'read-btn', 'submit'))
    bookDiv.appendChild(createElementsForBook('button','delete', 'delete-btn', 'submit'))
    const readBtn = bookDiv.querySelector('.read-btn');
    readBtn.addEventListener('click', () =>{
        bookDiv.classList.toggle('read');
        if(readBtn.textContent !== "read"){
            readBtn.textContent = "read";
            book.read = true;
        }
        else{
            readBtn.textContent = "not read";
            book.read = false;
        }
    })


    
    
    bookContainer.insertAdjacentElement('afterbegin',bookDiv);
}



/*Displays all books in Libray*/
function renderBook(){
    myLibrary.map((book,index)=>{
        createBook(book,index);
    })
}

renderBook()