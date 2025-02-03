const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
    const tBody = document.querySelector("tbody")
    const tr = document.createElement('tr');
    tBody.appendChild(tr);
    let len = myLibrary.length
        const td1 = document.createElement('td');
        td1.textContent = myLibrary[len-1].title;
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.textContent = myLibrary[len-1].author;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = myLibrary[len-1].pages;
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.textContent = myLibrary[len-1].readStatus;
        tr.appendChild(td4);
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

let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

function getValues(event) {
    event.preventDefault();

    let formData = {
        "title": this.title.value,
        "author": this.author.value,
        "pages": this.pages.value,
        "readStatus": this.readStatus.value,
    }
    addBookToLibrary(formData.title, formData.author, formData.pages, formData.readStatus);
}
