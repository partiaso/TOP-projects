const display = document.querySelector(".show-books");
const container = document.querySelector(".container")
const addBtn = document.createElement("button");
const table = document.createElement("table");

const selection = document.createElement("select");
const labelSelection = document.createElement("label")
const form = document.createElement("form");
const inputTitle = document.createElement("input");
const labelTitle = document.createElement("label");
const inputAuthor = document.createElement("input");
const labelAuthor = document.createElement("label");
const inputPages = document.createElement("input");
const labelPages = document.createElement("label");
const formFragment = document.createDocumentFragment();
const notReadOption = document.createElement("option");
const readOption = document.createElement("option");

labelTitle.textContent = "Book Title";
inputTitle.setAttribute("placeholder", "Clean Code");
inputTitle.required = true;
labelTitle.appendChild(inputTitle);

labelAuthor.textContent = "Author name";
inputAuthor.setAttribute("placeholder", "Robert C. Martin");
inputAuthor.required = true;
labelAuthor.appendChild(inputAuthor);

labelPages.textContent = "Number of Pages";
inputPages.setAttribute("placeholder", 464);
inputPages.required = true;
labelPages.appendChild(inputPages);

labelSelection.textContent = "Status";
notReadOption.setAttribute("selected", "selected");
labelSelection.appendChild(selection);

formFragment.appendChild(labelTitle);
formFragment.appendChild(labelAuthor);
formFragment.appendChild(labelPages);
formFragment.appendChild(labelSelection);
formFragment.appendChild(addBtn);



table.className = "table";
display.appendChild(table);


class Book {

    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

}


class Library {

    constructor(){
        this.books = [];
    }

    addBook(book) {  
        this.books.push(book);
    }

    deleteBook(index) {
        this.books.splice(index, 1);
        console.log(`Book eliminated`)
        console.log(this.books)
    }

    changeBookStatus(index){
        const book = this.books[index];
        book.status = book.status === "Read" ? "Not Read" : "Read"
    }

    getBooks(){
        return this.books
    }
    
}

class UI {

    static displayNewBook(library) {
        table.innerHTML = ""
        
        library.getBooks().forEach((book, index) => {
            
            console.log(`Book -> ${book.title} Index: ${index}`);
            const newRow = document.createElement("tr");
            newRow.innerHTML = `            
                <tr>
                    <td>${index +1}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td class="book-status">${book.status}</td>
                    <td>
                        <button data-index="${index}" class="status-btn">O
                        </button>
                    </td>
                    <td>
                        <button data-index="${index}" class="delete-book" >
                            <img src="./image/trash-can-outline.svg">
                        </button>
                    </td>
                    
                </tr>
            `
            table.appendChild(newRow);
        })
    }


    static bindEvents(library) {
        document.querySelector(".table").addEventListener("click", (e) => {
            if (e.target.classList.contains("status-btn")) {
                const index = e.target.getAttribute("data-index");
                library.changeBookStatus(index);
                UI.displayNewBook(library);
            }

            if (e.target.closest(".delete-book")) {
                const index = e.target.closest(".delete-book").getAttribute("data-index");
                library.deleteBook(index);
                UI.displayNewBook(library);
            }
            
        });
        
        document.querySelector(".new-book").addEventListener("click", () => {
            BookForm.showForm();
        });
    }

}

class BookForm {

    static createForm() {
        const formDiv = document.createElement("div");
        formDiv.className = "form-container"
        formDiv.setAttribute("value", "true");
        container.appendChild(formDiv);
        formDiv.appendChild(form);
        inputTitle.setAttribute("type", "text");
        inputAuthor.setAttribute("type", "text");
        inputPages.setAttribute("type", "number");
        readOption.innerText = "Read";
        notReadOption.innerText = "Not Read";
        selection.appendChild(readOption);
        selection.appendChild(notReadOption);
        notReadOption.setAttribute("value", "Not Read");
        readOption.setAttribute("value", "Read");
        addBtn.innerText = "Add";
        addBtn.setAttribute("type", "submit");
        form.appendChild(formFragment);
    
        form.addEventListener("submit", (event) => {
            event.preventDefault(); 
            console.log("Creating Book...");
            const title = inputTitle.value;
            const author = inputAuthor.value;
            const pages = inputPages.value;
            const status = selection.value;
            const book = new Book(title, author, pages, status);
            library.addBook(book);
            UI.displayNewBook(library);
            console.log(library);
            form.reset();
        });
    }

static showForm() {
    BookForm.createForm();
    document.querySelector(".new-book").style.display = "none";
}

}

const library = new Library();

// *    Books for test
const book1 = new Book("Clean Code", "Robert C. Martin", 464, "Not Read");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", 472, "Read");
const book3 = new Book("The Pragmatic Programmer", "Andrew Hunt y David Thomas", 352 , "Not Read");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
UI.displayNewBook(library);
//* 


UI.bindEvents(library);









