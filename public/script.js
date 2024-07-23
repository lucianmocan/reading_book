class Book {
    constructor(book_id, book_name, book_author, book_cover_url, book_sub_name, reading_status) {
        this.book_id = book_id;
        this.book_name = book_name;
        this.book_author = book_author;
        this.book_cover_url = book_cover_url;
        this.book_sub_name = book_sub_name;
        this.reading_status = reading_status;
    }

    getBookView() {
        return `
            <div class="book">
                <div class="cover">
                    <img src="${this.book_cover_url}" alt="Cover of ${this.book_name}">
                </div>
                <div>
                <h3>${this.book_name}</h3>
                <h5>${this.book_sub_name}</h5>
                <h4>${this.book_author}</h4>
                <p>${this.reading_status}</p>
                </div>
            </div>
            <hr>
        `;
    }
}

function displayBooks(books) {
    let content = '';
    books.forEach(bookData => {
        const book = new Book(
            bookData.book_id,
            bookData.book_name,
            bookData.book_author,
            bookData.book_cover_url,
            bookData.book_sub_name,
            bookData.reading_status
        );
        content += book.getBookView();
    });
    document.getElementById('book-list').innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => displayBooks(booksData));

 
const booksData = [
    {
        "book_id": 6,
        "book_name": "Roboții",
        "book_sub_name": "Roboții din lumea zorilor",
        "book_author": "Isaac Asimov",
        "reading_status": "reading",
        "book_cover_url": "https://static.editura-art.ro/image/7586/robotii-din-lumea-zorilor-cover_big_slide_new.jpg"
    },
    {
        "book_id": 5,
        "book_name": "Darwin a-t-il tué Dieu ?",
        "book_sub_name": "",
        "book_author": "Alister McGrath & Joanna Collicutt McGrath",
        "reading_status": "finished.",
        "book_cover_url": "https://m.media-amazon.com/images/I/513OBAbWsAL._SL1000_.jpg"
    },
    {
        "book_id": 4,
        "book_name": "Rendez-vous dans la forêt 3",
        "book_sub_name": "",
        "book_author": "Alain Auderset",
        "reading_status": "finished.",
        "book_cover_url": "https://static.fnac-static.com/multimedia/Images/FR/NR/ec/5d/9c/10247660/1507-1/tsp20231003075343/Rendez-vous-dans-la-foret-3.jpg"
    },
    {
        "book_id": 3,
        "book_name": "Un souffle dans la maison de l'islam",
        "book_sub_name": "",
        "book_author": "David Garrison",
        "reading_status": "finished.",
        "book_cover_url": "https://4.cdn.premierepartie.com/wp-content/uploads/2016/11/visuelavant_1.jpg"
    },
    {
        "book_id": 2,
        "book_name": "POTENTIEL",
        "book_sub_name": "",
        "book_author": "Claude Houde",
        "reading_status": "finished.",
        "book_cover_url": "https://eglise.shop/wp-content/uploads/2022/01/decouvrez-et-developpez-votre-potentiel-claude-houde.jpg"
    },
    {
        "book_id": 1,
        "book_name": "Curajul de a fi tu însuți",
        "book_sub_name": "",
        "book_author": "Jacques Salomé",
        "reading_status": "finished.",
        "book_cover_url": "https://cdn.librarius.md/img/original/curajul-de-a-fi-tu-insuti_1555517707.jpg"
    },
    {
        "book_id": 0,
        "book_name": "Boulversement",
        "book_sub_name" : "Les nations face aux crises et au changement",
        "book_author": "Jared Diamond",
        "reading_status": "finished.",
        "book_cover_url" : "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/b3/49/e1/14764467/1507-1/tsp20240607071812/Bouleversement.jpg"
    }
];