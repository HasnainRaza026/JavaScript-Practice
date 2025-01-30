const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring an Object
const { title, author, publicationDate, pages, hasMovieAdaptation, genres } =
  getBook(2); // destructing the object relays on property names
// console.log(title, author, publicationDate, pages, hasMovieAdaptation, genres);

// Destructuring an Array
const [primaryGenre, secondaryGenre] = genres; // destructing the array relays on the index (sequence)
// console.log(primaryGenre, secondaryGenre);

// Rest Operator
const [primary, secondary, ...remaining] = genres; // ...newArrayName is a rest operator
// console.log(primary, secondary, remaining);

// Spread Operator in array
const newArray = ["epic fantasy", ...genres]; // ...arrayName is a spread operator
// console.log(newArray);

// Spread Operator in object
const updatedBook = {
  moviePublicationDate: "12-8-2001",
  ...getBook(2),
};
// console.log(updatedBook);

// Ternary Operator (?)
const a = 0 ? "truthy" : "falsy";
// console.log(a);
/*
Ternary Operatore is a simple shortcut for if statemnet. It works as follow:
'a = condition ? val1 : val2'

val1 will be sved in the variable a if condition is true and val2 will be save in the varaible a if condition is false.

It is used when we need to save the result in a varable or had to do quick check
*/

// Guard Operator (&&)
const b = 5 && "hello";
// console.log(b);
/*
Guard Operatore is a simple shortcut for if statemnet. It works as follow:
'b = condition && val'

val will be sved in the variable b if condition is true otherwise the condition (truthy or false value) will be saved in the variable.

It is used when we need to save the result in a varable or had to do quick check
*/

// Default Operator (||)
const c = 0 || "hi";
// console.log(c);
/*
Default Operatore is a simple shortcut for if statemnet. It works as follow:
'c = condition || val'

val will be sved in the variable c if condition is false otherwise the condition (truthy or false value) will be saved in the variable.

It is used when we need to save the result in a varable or had to do quick check
*/

// Nullish Coalescing Operator (??)
const d = 0 ?? "hi";
// console.log(c);
/*
It works similar to Default operator, but it only short circuit the null and undefined values, whereas Desualt operator short circuit all falsy values
*/

// Optional Chaining Operator (?.)
const rating = getBook(2).reviews?.goodreads?.rating;
// console.log(rating);
/*
?. is optional chaning operator, it checks if the previous operation (on left side) is undefine or not. If it is not undefine it will allow the furthur operation, otherwise if it is undefine it will immediately stop the operation and return undefine [Helps to avoid errors]
*/

// Array Map Method
const titles = data.map((book) => book.title);
// console.log(titles);

// Array Filter Method
const longBooks = data.filter((book) => book.pages > 500);
// console.log(longBooks);

// Array Reduce Method
const allPages = data.reduce((acc, book) => acc + book.pages, 0); // Reduce method reduces the entire array in one value, it is mostly used when we had to perform some mathematical operation on all values in array and return the total output. 0 is the accumulator or the starting value.
// console.log(allPages);

//Array Sort Method
const arr = [1, 3, 2, 6, 4];
const newArr = arr.slice().sort((a, b) => a - b); // slice() creates a copy odf original array, sort() sorts the array, a-b for assending and b-a for descending
// console.log(newArr);
