
let jsonParser = new JSONParser();
var library :Library = new Library(null,null);

jsonParser.getJSON("items.json", data => {
    let library:Library = Library.fromJSON(data);

    let itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));

});