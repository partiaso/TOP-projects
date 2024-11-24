

const display = document.querySelector(".show-books");
const newBookBtn = document.querySelector(".new-book");
const container = document.querySelector(".container")
const addBtn = document.createElement("button");
const selection = document.createElement("select");
const myLibrary = [];
const table = document.createElement("table");


table.className = "table";
display.appendChild(table);

function displayNewBook() {
    
    table.innerHTML = ""
    
    myLibrary.forEach((book, index) => {
        
        console.log(`Libro ${book.title} indice ${index}`);
        const newRow = document.createElement("tr");
        newRow.innerHTML = `            
            <tr>
                <td>${index +1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td class="book-status">${book.status}</td>
                <td>
                    <button onclick="changeStatus(${index})" class="status-btn">O
                    </button>
                </td>
                <td>
                    <button onclick="deleteBook(${index})" class="delete-book" >
                        <img src="./image/trash-can-outline.svg">
                    </button>
                </td>
                
            </tr>
        `
        table.appendChild(newRow);
    })
}

function changeStatus(index){
    if (myLibrary[index].status === "Read") {
        myLibrary[index].status = "Not Read"
    }
    else if (myLibrary[index].status === "Not Read"){
        myLibrary[index].status = "Read"
    }
    displayNewBook()
}



function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayNewBook();
    console.log(`Libro eliminado`)
    console.log(myLibrary)
}


newBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newBookBtn.style.display = "none";
    createForm();
})

const formDiv = document.createElement("div");
const form = document.createElement("form");
const inputTitle = document.createElement("input");
const inputAuthor = document.createElement("input");
const inputPages = document.createElement("input");
const notReadOption = document.createElement("option");
const readOption = document.createElement("option");

function createForm() {
    formDiv.className = "form-container"
    formDiv.setAttribute("value", "true");
    container.appendChild(formDiv);
    formDiv.appendChild(form);
    form.appendChild(inputTitle);
    inputTitle.setAttribute("type", "text");
    form.appendChild(inputAuthor);
    inputAuthor.setAttribute("type", "text");
    form.appendChild(inputPages);
    inputPages.setAttribute("type", "number");
    readOption.innerText = "Read";
    notReadOption.innerText = "Not Read";
    form.appendChild(selection);
    selection.appendChild(readOption);
    selection.appendChild(notReadOption);
    notReadOption.setAttribute("value", "Not Read");
    readOption.setAttribute("value", "Read");
    addBtn.innerText = "Add";
    addBtn.setAttribute("type", "submit");
    form.appendChild(addBtn);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        console.log("Creando Libro");
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const pages = inputPages.value;
        const status = selection.value;
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

// *    Books for test

addBookToLibrary("Clean Code", "Robert C. Martin", 464, "Not Read");
addBookToLibrary("Eloquent JavaScript", "Marijn Haverbeke", 472, "Read");
addBookToLibrary("The Pragmatic Programmer", "Andrew Hunt y David Thomas", 352 , "Not Read" );
displayNewBook()










