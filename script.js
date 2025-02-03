const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
}

function displayBooks() {
    const tBody = document.querySelector("tbody")
    for (let book of myLibrary) {
        const tr = document.createElement('tr');
        tBody.appendChild(tr);
        for (let key in book) {
            const td = document.createElement('td');
            td.textContent = book[key];
            tr.appendChild(td);
        }
    }
}

addBookToLibrary("A Story Of Yesterday", "Sergio Cobo", "70 Pages", "not yet read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "323 Pages", "read");
addBookToLibrary("Something Wicked This Way Comes", "Ray Bradbury", "293 Pages", "not yet read");
addBookToLibrary("A Clockwork Orange", "Anthony Burgess", "240 Pages", "read");
displayBooks();