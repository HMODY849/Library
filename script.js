const add = document.getElementById("add");
const father = document.getElementById("father");
const f1 = document.getElementById("f1");
const roof = document.getElementById("roof");
const form = document.getElementById("form");
const add2 = document.getElementById("add2");
const head = document.getElementById("head")
let idCounter = 0;


let myLibrary = [];

function Book(title,author,pages,rating) {
        this.id= idCounter++
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.rating=rating;
        this.info = function(){
            return this.title +' '+ this.author+ ' '+ this.pages+' '+this.read
        }
}

function addBookToLibrary() {
    const bookTitle = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const rating = document.getElementById("number").value;
    let book = new Book( bookTitle, author, pages, rating);
    myLibrary.push(book)
    form.reset();
}

function gui(){
    roof.innerHTML=""
    myLibrary.forEach((book)=>{
    const cont = document.createElement("div");
    cont.classList.add("cont");
    cont.setAttribute("data-id", book.id)
    cont.innerHTML=
    `
    <div class="book">
    <button class="remove" id="remove${book.id}"><img src="./img/closed.svg"></button>
    <div class="bookname">Name: ${book.title}</div>
    <div>author: ${book.author}</div>
    <div>pages: ${book.pages}</div>
    <div>rating: ${book.rating}</div>
    </div>
    `
    roof.appendChild(cont);
    const removes = document.getElementById(`remove${book.id}`);
        removes.addEventListener("click", function(){
            removeBook(book.id)
        })
     
})
}

function removeBook(bookId){
     myLibrary = myLibrary.filter(book => book.id !== bookId);
     gui()
}

add.addEventListener("click",function(){
    form.classList.toggle("none");
    form.classList.toggle("active");
    roof.classList.toggle("opacity");
    head.classList.toggle("opacity");
})

add2.addEventListener("click",function(){
    addBookToLibrary();
    gui();
    form.classList.toggle("none");
    form.classList.toggle("active");
    roof.classList.toggle("opacity");
    head.classList.toggle("opacity");
})
 
