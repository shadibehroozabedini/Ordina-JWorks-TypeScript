class Library {

    items: Array<Item>;

    constructor(public books: Array<Book>, public movies: Array<Movie>) {

    }

    static fromJSON(data: any): Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books, movies);
    }

    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    addMovie() {
        let extraMovie: Movie = new Movie("extramovie", "drama", "sfsfsfsdfs", 24, "some name");
        this.items.push(extraMovie);
        document.getElementById("items").innerHTML = "";

        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }


    addBook() {
        let extraBook: Book = new Book("bookextra", new Author("me"), "nobel", "extra description");
        this.items.push(extraBook);
    }
}