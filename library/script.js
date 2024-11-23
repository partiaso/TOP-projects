

const display = document.querySelector(".show-books");
const newBookBtn = document.querySelector(".new-book");
const container = document.querySelector(".container")
const addBtn = document.createElement("button");
const myLibrary = [];

// *    CREAR TABLA


const table = document.createElement("table");
table.className = "table";
display.appendChild(table);

const tableTopRow = document.createElement("tr");
tableTopRow.className = "top-row";
table.appendChild(tableTopRow);

// *    HEADER table

const tableTitle = document.createElement("th");
const tableAuthor = document.createElement("th");
const tablePages = document.createElement("th");
const tableStatus = document.createElement("th");

tableTopRow.appendChild(tableTitle);
tableTitle.innerText = "Title";
tableTopRow.appendChild(tableAuthor);
tableAuthor.innerText = "Author";
tableTopRow.appendChild(tablePages);
tablePages.innerText = "Pages";
tableTopRow.appendChild(tableStatus);
tableStatus.innerText = "Status";




function displayNewBook() {

    const newRow = document.createElement("tr");
    newRow.innerHTML = "";

    myLibrary.forEach((book, index) => {
        console.log(`Libro ${book.title} indice ${index}`);
        newRow.innerHTML = `
            <p>${index +1}</p>
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.status}</td>
            </tr>
            <button onclick="deleteBook(${index})" class="delete-book" >
                <img src="./image/trash-can-outline.svg">
            </button>
        `;
        table.appendChild(newRow);
    })
}


function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayNewBook();
    console.log(`Libro eliminado`)
    console.log(myLibrary)
}


newBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createForm();
})


function createForm() {
    const formDiv = document.createElement("div");
    formDiv.className = "form-container"
    container.appendChild(formDiv);
    const form = document.createElement("form");
    const inputTitle = document.createElement("input");
    const inputAuthor = document.createElement("input");
    const inputPages = document.createElement("input");
    const inputStatus = document.createElement("input");
    formDiv.appendChild(form);
    form.appendChild(inputTitle);
    inputTitle.setAttribute("type", "text");
    form.appendChild(inputAuthor);
    inputAuthor.setAttribute("type", "text");
    form.appendChild(inputPages);
    inputPages.setAttribute("type", "number");
    form.appendChild(inputStatus);
    inputStatus.setAttribute("type", "text");
    addBtn.innerText = "Add";
    addBtn.setAttribute("type", "submit");
    form.appendChild(addBtn);


    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        console.log("Creando Libro");
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const pages = inputPages.value;
        const status = inputStatus.value;
        addBookToLibrary(title, author, pages, status);
        displayNewBook();
        console.log(myLibrary);
        form.reset();
    })
}


function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}








addBookToLibrary("Clean Code", "Robert C. Martin", 464, false);
displayNewBook()
addBookToLibrary("Eloquent JavaScript", "Marijn Haverbeke", 472, true);
displayNewBook()
addBookToLibrary("The Pragmatic Programmer", "Andrew Hunt y David Thomas", 352 , false );
displayNewBook()
console.log(myLibrary);










