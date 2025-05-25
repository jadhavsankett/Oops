// function Toffee(flover,price,expire){
//     this.flover = flover
//     this.price = price
//     this.expire = expire

// }

// let t1 = new Toffee("chocolata",10,"2023-25");

// class Libaray {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(...book);
//   }
//   ListallBooks() {
//     this.books.forEach(function (book,index) {
//       console.log(`${index + 1}) ${book.name}`);
//     });
//   }
// }

// class book {
//   constructor(name, isbn, price) {
//     this.name = name;
//     this.isbn = isbn;
//     this.price = price;
//     this.readestatus = false;
//   }
//   info() {
//     console.log(
//       `${this.readestatus ? "✅":"❌"} the book name is the ${this.name} is book isbn that ${
//         this.isbn
//       } and price of the book is ${this.price}Rs. i have ${
//         this.readestatus ? "read the book" : "not read the book"
//       } and his avilabel for the Libarary`
//     );
//   }
//   changereadestatus() {
//     this.readestatus =! this.readestatus;
//   }
// }

// let vckLibaray = new Libaray();
// let book1 = new book("reminder", "if9hkkhd89d9098", 900);
// let book2 = new book("i have never three ", "if9098", 100);
// let book3 = new book("Die for me ", "if9hkkhd", 400);

// vckLibaray.addBook([book1,book2,book3]);






// class Libarary {
//   constructor() {
//     this.books = [];
//   }
//   addbooks(book) {
//     this.books.push(...book);
//   }
//   listallbooks() {
//     this.books.forEach(function (book,index) {
//       console.log(`${index + 1}> ${book.name} book writen by  ${book.author}`);
//     });
//   }
// }

// class book {
//   constructor(name, isbn, price, author) {
//     this.name = name;
//     this.isbn = isbn;
//     this.price = price;
//     this.author = author;
//     this.readstatus = false;
//   }
//   info() {
//     console.log(
//       `${this.readstatus ?"✅":"❌"} ${this.name} his greak book write by ${this.author}. and his book isbn ${this.isbn} and price is ${this.price}Rs . i have ${this.readstatus ? "read the book": "not read the book"} and his book add the amezon and mezho`
//     );
//   }
//   changereadstatus(){
//     this.readstatus =! this.readstatus;
//   }
// }

// let shivajiLibray = new Libarary();
// let book1 = new book("time line of the life","8dhfkkh9",330,"sanskar shinde");
// let book2 = new book("fifty sheads of the gray","8dhfkkh99",900,"kumar patil");
// let book3 = new book("the lie of the nature ","8dhfkkh99",450,"shivraj jadhav");
// let book4 = new book("down foul","8dhfkkh99",150,"harshad pattankude");
// let book5 = new book("atomic hibit ","8dhfkkh99",600,"vanshika surywanshi");
// let book6 = new book("ranger bits ","8dhfkkh99",200,"vardvpatil");

// shivajiLibray.addbooks([book1,book2,book3,book4,book5,book6])




//playlist of the spotify like 


//second song  Libaray


class artist{
  constructor(){
    this.songs  = []
  }
  addartist(songs){
    this.songs.push(...songs);
  }
  listallsongs(){
    this.songs.forEach(function(songs,index){
      console.log(`${index + 1}> ${songs.name} song lyrics by the ${songs.writen}`)
    })
  }
}

class songs{
  constructor(name , avg , lyrics ,writen ){
      this.name = name ;
      this.avg = avg ;
      this.lyrics = lyrics;
      this.writen = writen;
  }
  info(){
   console.log(
    `${this.name} this song liseen at list one time of the day and his song lyrics by ${this.writen}`
   );
  }
}

let theweeknd = new artist();
let justin = new artist();
let song1  = new songs("the hills" , "02:30" , " " ,"the Weeknd");
let song2 = new songs("Reminder" , "3:00" ," ","the weeknd");

let song3  = new songs("Baby" , "02:30" , " " ,"justin bilber");
let song4 = new songs("let me love you " , "3:00" ," ","justin bilber");
justin.addartist([song3,song4])
theweeknd.addartist([song1,song2])