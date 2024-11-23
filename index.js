var inputName = document.getElementById('name');
var inputUrl = document.getElementById('url');
var bookOutput = document.getElementById('bookOutput');
var visitInput = document.getElementById('visitAnchor');

var list = [];
if (localStorage.getItem('list') != null) {
    list = JSON.parse(localStorage.getItem('list'));
    displayBook()
}
else {
    list = [];
}

function addBook() {
    
    bookmark = {
        name: inputName.value,
        url: inputUrl.value
    }
    
    list.push(bookmark)
    clear()
    localStorage.setItem('list', JSON.stringify(list));
    displayBook()


    console.log(list);
}

function clear() {
    inputName.value = null;
    inputUrl.value = null;
}

function displayBook() {
    cartona = ``;
    for (let i = 0; i < list.length; i++) {
        cartona += `
        <tr>
                        <th scope="row">${i + 1}</th>
                        <td>${list[i].name}</td>
                        <td><a href="${list[i].url}" class=""><button  onclick="" class="btn btn-warning">visit</button></a></td>
                        <td><button onclick="deleteBook(${i})" class="btn btn-danger ">delete</button></td>
                    </tr>`


    }
    bookOutput.innerHTML = cartona;
}

function deleteBook(deleteIndex) {
    list.splice(deleteIndex, 1);
    localStorage.setItem('list', JSON.stringify(list));
    displayBook()
}


