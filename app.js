
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const bookList = document.querySelector('#book-list')
const form = document.querySelector('#book-form');

// Add book to UI
function addBookToUI(e) {
    e.preventDefault();
    if(title.value === '' || author.value === '' || isbn.value === '') {
        alert('Please fill all the fileds', 'danger');
    } else {
        const book = {
            title: title.value,
            author: author.value,
            isbn: isbn.value
        };
        const markup = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            </tr>
        `;
        bookList.insertAdjacentHTML('beforeend', markup);
        alert('Book added', 'success')
        clearInputs();
        title.focus();
    }
};

// Remove book from UI
function removeBook(e) {
    if(e.target.classList.contains('btn-danger')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
        alert('Book removed', 'danger')
    }
};

// Alert managemnet
function alert(message, className) {
    const markup = `
        <div class="alert alert-${className}">${message}</div>
    `
    form.insertAdjacentHTML("afterbegin", markup);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
};

// Clearing inputs
function clearInputs() {
    title.value = '';
    author.value = '';
    isbn.value = '';
};

// Event to add book to UI
document.querySelector('#book-form').addEventListener('submit', addBookToUI)

// Event to remove book from UI
bookList.addEventListener('click', removeBook);
