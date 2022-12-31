
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

function toggleClass(element,className){
    return element.classList.toggle(className);
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
    bookDiv.appendChild(createElementsForBook('button','read', 'read-btn', ''))
    bookDiv.appendChild(createElementsForBook('button','delete', 'delete-btn', ''))
    bookContainer.insertAdjacentElement('afterbegin',bookDiv);
    
}

/*Displays all books in Libray*/
function renderBook(){
    myLibrary.forEach((book)=>{
        createBook(book);
    })
}

renderBook()