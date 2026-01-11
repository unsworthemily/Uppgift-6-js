//Assignment lesson JS6: Practice.  
//Instructions:  

//Create a small app to track books you’ve read or want to read (If you are not into books, feel free to change it to movies, etc). Use prompt and alert to simulate the menu.  
//Use objects to represent books  
//Store multiple books in an array  
//Write functions to add, list and update books  

//Requirements:  
//A library array to store all book objects  
//Each book should have:  

//Title  
//Author  
//isRead  

//Implement these functions:  

//addBook() – asks for details and adds a new book object to the library  
//listBooks() – display a list of all books (console.log works fine here)  
//markAsRead(title) – finds a book by title and sets isRead to true  

//These methods could be useful in this assignment so you’ll have to do some research on your own:  

//push( )  
//forEach( )  
//find( )  
//filter( )

//----------APP som loggar böcker "bibliotek"--------------

//----Array som lagrar alla bokobjekt----
const library = [];

//----Funktion som lägger till en ny bok i biblioteket----
function addBook() {
  const title = prompt("Enter book title:");
    if (!title) {
    alert("Title cannot be empty.");
    return;
  }

  const author = prompt("Enter book author:");
    if (!author) {
    alert("Author cannot be empty.");
    return;
  }

//----Frågar om boken är läst och omvandlar svaret till boolean----
  const readAnswer = prompt("Have you read this book? (yes/no)").toLowerCase();
  const isRead = readAnswer === "yes";

//----"ett bokobjekt"----
  const book = {
    title: title,
    author: author,
    isRead: isRead,
  };

//----Lägger till boken i arrayen library----
  library.push(book);
  alert(`"${title}" by ${author} has been added to your library.`);
}

//----Funktion som listar alla böcker i biblioteket----
function listBooks() {
//----Kontrollerar om biblioteket är tomt----
    if (library.length === 0) {
    console.log("No books in the library yet.");
    alert("No books to display (check console).");
    return;
  }

  console.log("=== Book List ===");

//----Loopar igenom alla böcker med forEach----
  library.forEach((book, index) => {
    const status = book.isRead ? "READ" : "NOT READ";
    console.log(`${index + 1}. "${book.title}" by ${book.author} [${status}]`);
  });

    alert("Book list printed in console.");
}

//----Funktion som markerar en bok som läst baserat på titel----
function markAsRead(title) {

//----Hittar första boken som matchar titeln----
  const book = library.find(
    (b) => b.title.toLowerCase() === title.toLowerCase()
  );

//----Om ingen bok hittas----
  if (!book) {
    alert(`Book titled "${title}" was not found.`);
    return;
  }

//----Markerar boken som läst----
  book.isRead = true;
    alert(`"${book.title}" is now marked as read.`);
}

//---- (Valfri) Funktion som använder filter() för att visa olästa böcker----
function listUnreadBooks() {

//----Skapar en ny array med endast olästa böcker----
  const unreadBooks = library.filter((book) => !book.isRead);

    if (unreadBooks.length === 0) {
    console.log("No unread books 🎉");
    alert("No unread books!");
    return;
  }

  console.log("=== Unread Books ===");

  unreadBooks.forEach((book) => {
    console.log(`"${book.title}" by ${book.author}`);
  });

  alert("Unread books printed in console.");
}

//----Variabel som styr om programmet ska fortsätta köras----
let running = true;

//----Meny som körs tills användaren väljer att avsluta----
while (running) {
  const choice = prompt(`
Book Tracker
1. Add book
2. List books
3. Mark book as read
4. List unread books
5. Exit
Enter your choice:`);

  switch (choice) {
    case "1":
      addBook();
      break;

    case "2":
      listBooks();
      break;

    case "3": {
      const title = prompt("Enter the title of the book to mark as read:");
      if (title) markAsRead(title);
      break;
    }

    case "4":
      listUnreadBooks();
      break;

    case "5":
      running = false;
      alert("Goodbye!");
      break;

    default:
      alert("Invalid choice. Please try again.");
  }
}
