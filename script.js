let myLibrary = [];

class Book {

    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    changeReadStatus() {
        if (this.readStatus == 'read')
            this.readStatus = 'not read yet'
        else
            this.readStatus = 'read';
    }

    displayLastBook() {
        const tBody = document.querySelector("tbody")
        const tr = document.createElement('tr');
        tBody.appendChild(tr);
        let len = myLibrary.length

        const td = document.createElement('td');
        td.textContent = myLibrary[len - 1].title;
        tr.appendChild(td);

        const td2 = document.createElement('td');
        td2.textContent = myLibrary[len - 1].author;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = myLibrary[len - 1].pages;
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.textContent = myLibrary[len - 1].readStatus;
        tr.appendChild(td4);

        const changeStatusBtn = document.createElement('button');
        changeStatusBtn.classList.add('switch-btn')
        changeStatusBtn.textContent = 'Change';
        const td5 = document.createElement('td');
        td5.appendChild(changeStatusBtn);
        tr.appendChild(td5);
        changeStatusBtn.addEventListener('click', () => {
            let rowIndex = changeStatusBtn.parentNode.parentNode.rowIndex;
            myLibrary[rowIndex - 1].changeReadStatus();
            let cell = document.querySelector('.table').rows[rowIndex].cells[3];
            if (cell.textContent == 'read')
                cell.textContent = 'not yet read'
            else
                cell.textContent = 'read'
        })

        const removeBookBtn = document.createElement('button');
        removeBookBtn.classList.add('remove-btn')
        removeBookBtn.textContent = 'Remove';
        const td6 = document.createElement('td');
        td6.appendChild(removeBookBtn);
        tr.appendChild(td6);
        removeBookBtn.addEventListener('click', () => {
            let rowIndex = removeBookBtn.parentNode.parentNode.rowIndex;
            document.querySelector('.table').deleteRow(rowIndex);
            myLibrary = myLibrary.filter((book) => {
                if (book == myLibrary[rowIndex - 1])
                    return false;
                return true;
            })
        })
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book);
    return book;
}



addBookToLibrary("A Story Of Yesterday", "Sergio Cobo", "70 Pages", "not yet read").displayLastBook();
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "323 Pages", "read").displayLastBook();
addBookToLibrary("Something Wicked This Way Comes", "Ray Bradbury", "293 Pages", "not yet read").displayLastBook();
addBookToLibrary("A Clockwork Orange", "Anthony Burgess", "240 Pages", "read").displayLastBook();

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
    addBookToLibrary(formData.title, formData.author, formData.pages, formData.readStatus).displayLastBook();
}

let dialBtn = document.querySelector('.dialog-btn');
let dialog = document.querySelector('.form-container');

dialBtn.addEventListener('click', () => {
    dialog.showModal();
    form.reset();
})
let addBookBtn = document.querySelector('.submit-btn');

addBookBtn.addEventListener('click', () => {
    dialog.close();
})