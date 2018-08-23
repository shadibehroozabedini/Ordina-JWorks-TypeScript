var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    Library.prototype.addMovie = function () {
        var extraMovie = new Movie("extramovie", "drama", "sfsfsfsdfs", 24, "some name");
        this.items.push(extraMovie);
        document.getElementById("items").innerHTML = "";
        var itemContainer = document.getElementById("items");
        this.items.forEach(function (item) { return item.render(itemContainer); });
    };
    Library.prototype.addBook = function () {
        var extraBook = new Book("bookextra", new Author("me"), "nobel", "extra description");
        this.items.push(extraBook);
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map