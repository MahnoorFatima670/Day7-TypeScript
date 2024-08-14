var Book = /** @class */ (function () {
    function Book(title, author, publicationYear, genre) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    Book.prototype.displayDetails = function () {
        console.log("The title of book is:".concat(this.title));
        console.log("The author of book is:".concat(this.author));
        console.log("The publicatonYear of book is:".concat(this.publicationYear));
        console.log("The genre of book is:".concat(this.genre));
    };
    Book.prototype.isRecent = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5;
    };
    Book.prototype.changeGenre = function (newGenre) {
        this.genre = newGenre;
    };
    Book.prototype.isAuthor = function (authorName) {
        return this.author === authorName;
    };
    return Book;
}());
var myBook = new Book("Islamic Repulic of Pakistan", "mahnoor fatima", 2018, "History");
myBook.displayDetails();
console.log(myBook.isRecent());
myBook.changeGenre("International Relations");
myBook.displayDetails();
console.log(myBook.isAuthor("mahnoor fatima"));
function findPersonByCity(people, city) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        for (var _a = 0, _b = person.addresses; _a < _b.length; _a++) {
            var address = _b[_a];
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
// Example usage:
var people = [
    {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        phone: "555-1234",
        addresses: [
            { street: "123 Main St", city: "Anytown", state: "CA", zipcode: "90210" },
            { street: "456 Oak St", city: "Othertown", state: "TX", zipcode: "73301" }
        ]
    },
    {
        name: "Jane Smith",
        age: 25,
        email: "jane.smith@example.com",
        phone: "555-5678",
        addresses: [
            { street: "789 Pine St", city: "Anytown", state: "CA", zipcode: "90210" },
            { street: "101 Maple St", city: "Differentown", state: "FL", zipcode: "33101" }
        ]
    }
];
var result = findPersonByCity(people, "Anytown");
if (result) {
    console.log("Name: ".concat(result.name, ", Email: ").concat(result.email));
}
else {
    console.log("No person found in the specified city.");
}
