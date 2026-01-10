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

//BOK-APP
//Array som lagrar böcker
const bibliotek = [];

//Funktion: att lägga till böcker
function läggtillBok() {
    //Titel
    const titel = prompt("Ange bokens titel: ");

    //Författare
    const författare = prompt("Ange bokens författare: ");

    //Skapa bokobjekt
    const bok = {
        titel: titel,
        författare: författare,
        ärLäst: sant
    };

    //Lägg till bok i biblioteket
    bibliotek.push(bok);
    alert(`Boken "${titel}" av ${författare} har lagts till i ditt bibliotek.`);
}
    




// Meny Ifyllt av läraren jag har ändrat till svenska alternativ.
while (running) {
    const choice = prompt(`
       Book Tracker
         1. Lägg till bok
            2. Lista böcker
            3. Markera bok som läst
            4. Avsluta
         Ange ditt val: `);

    switch (choice) {
        case "1":
            läggtillBok();
            break;

        case "2":
            listaBöcker();
            break;

        case "3":
            const title = prompt("Ange titeln på boken du vill markera som läst: ");
            markerasomLäst(title);
            break;

        case "4":
            running = false;
            alert("Hejdå!");
            break;

        default:
            alert(
                "Ogiltigt val. Försök igen."); 
      }
}