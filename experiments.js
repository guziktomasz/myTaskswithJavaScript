//alert("Witaj");
console.log("Tratatata");

const monthlyRent = 50.0;
const yearlyRent = monthlyRent * 12;
console.log(monthlyRent);
console.log(yearlyRent);

console.log("Type of monthlyRent: " + typeof monthlyRent);

//strings

const firstName = "Zenon";
const lastName = "Laskowski";

console.log(firstName + " " + lastName);

const fullName = `${firstName} ${lastName}`
console.log(fullName);

const five = 5;
const four = "4";
console.log(five + four);

//booleans

const lightIsOn = true;
console.log(lightIsOn);

const number = 4545145;
console.log(number);

// if

const skyIsBlue = true;

if(skyIsBlue){
    console.log("sky is blue");
} else {
    console.log("sky isnt blue");
}

const temp = 32;

// == pomija typy danych
// === do porównannia uwzglednia typ danych

if(temp === "32"){
    console.log("temperatura wynosi 32 st");
} else {
    console.log("temperatura jest rózna od 32 st");
}

if(temp > 32){
    console.log("very hot");
} else if(temp === 32) {
    console.log("hot");
} else {
    console.log("fine");
}

// switch
const value = 1;

switch(value){
    case 2:
    case 4:
        console.log("mniejsze od 5");
        break;
    case 1:
    case 5:
        console.log("równe 5");
        break;
    default:
        console.log("switch default został wybrany")
}

// pętle

let friendAtYourParty = 0;

friendAtYourParty = friendAtYourParty + 1;
friendAtYourParty += 1;
friendAtYourParty ++;

console.log("Ilość znajomych na imprezie: " + friendAtYourParty);

//while
friendAtYourParty = 0;

while (friendAtYourParty < 10) {
    friendAtYourParty ++;
}

console.log("Ilość znajomych na imprezie po while: " + friendAtYourParty);

// for
friendAtYourParty = 0;
for (let i = 0; i < 10; i++) {
    friendAtYourParty ++;
}
console.log("Ilość znajomych na imprezie po for: " + friendAtYourParty);

//do while

friendAtYourParty = 0;
do {
    friendAtYourParty ++;
} while (friendAtYourParty <10);
console.log("Ilość znajomych na imprezie po do while: " + friendAtYourParty);

//continue

let i = 0;
while (i <= 10){
        if(i%2 === 0) {
            i++;
            continue;
        }
    console.log(i);
    i ++;
}

//funkcje

function addTwo (number){
    return number +2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(55));

// zad napisac funkcję function greet(firstName, lastName, honorific, greeting)
// która zwróci zdanie z pozdrowieniami
// EX: greet("Nela", "Kuklake", "Pani", "Witaj") zwróci:

function greet (firstName, lastName, honorific, greeting){
    return greeting + " " + honorific + " " + firstName + " " + lastName;
}
console.log(greet("Tomasz", "Guzik", "Sir", "Witaj"));

function greet1 (firstName, lastName, honorific, greeting){
    return `${greeting} ${honorific} ${firstName} ${lastName}`;
}
console.log(greet1("Tomasz", "Guzik", "Sir", "Witaj"));

// przypisanie całej funkcji do zmiennej - przypisuje całe ciało funkcji
const functionVariable = addTwo;
console.log(functionVariable);

// scope

let globalScope = "wszędzie istnieję";

function verifyScopes (){
    console.log(globalScope);

    const functionScope = "nie istnieje poza funkcją varifyScopes"
    console.log(functionScope);

    if(true) {
        console.log(globalScope);
        console.log(functionScope);

        const ifBlockScope = " nie istnieje poza blokiem if";
        console.log(ifBlockScope);
    }

    // console.log(ifBlockScope);
    globalScope += " i zmieniam się";
}

verifyScopes();
console.log("globalScope po funkcji: ",globalScope);

//nested function - funkcje zagnieżdżone

function addFive(number){
    function add(x, y){
        return x + y;
    }
    return number + add(2, 3);
}

console.log(addFive(5));

// builtins - funkcje wbudowane

const surName ="Zenon";
console.log(surName.toLowerCase());
console.log(surName.toUpperCase());
console.log(surName.substring(2, 5));
console.log(surName.length);
console.log(surName.indexOf("n"));

const sentence = "Królewna Śnieżka ma bardzo czarne włosy."
console.log(sentence.split(" "));

console.log(Math.fround(3.6));
console.log(Math.round(3.6));
console.log(Math.floor(3.6));
console.log(Math.ceil(3.6));

//objects

let person = {
    name: "Jan Kochanowski",
    age: " 45",
    address: {
        street: "Klonowa 6",
        city: "Dalekowice",
        zipcode: "22-333"
    }
}

const property = 'name';
console.log(person.name);
console.log(person['name']);
console.log(person[property]);
console.log(person);
console.log(person.address);
console.log(person.address.city);

const dog = {
    name: "Haker",
    speak: function() {
        console.log("hau hau")
    }
}
dog.speak();

// context

person = {
    name: "Jan Kochanowski",
    age: " 45",
    address: {
        street: "Klonowa 6",
        city: "Dalekowice",
        zipcode: "22-333"
    },
    getAddress(){
        return `${this.name}, ul. ${this.address.street}, ${this.address.zipcode} ${this.address.city}`
    }
}

console.log(person.getAddress());

// arrays

const books = [
    { author: "Robert C. Martin", title: "Clean code" },
    { author: "Jane Austin", title: "Rozważna i romantyczna" },
    { author: "Kyle Simpson", title: "You don't know Javascript" },
    { author: "Włodzimierz Gajda", title: "Git" }
];

console.log(books);

//dodanie elementu na końcu
books.push("end");

console.log(books);

//usunięcie ostatniego elementu
books.pop();
console.log(books);

//usunięcie pierwszego elementu
books.shift();
console.log(books);

//dodanie na początku elelemntu
books.unshift({ author: "Robert C. Martin", title: "Clean code" });
console.log(books);

//sortowanie
books.reverse();
console.log(books);

//join
console.log(books.join(", "));

//odwoływanie się do elelemntów tablicy
console.log(books[3].author);

//iterowanie po tablicy
for(let i=0; i < books.length; i++) {
    console.log(`element nr ${i}: ${books[i].author}`);
}

books.forEach(function(book, index, booksy){
    console.log(`element nr: ${index}: ${book.author}`)
    console.log(booksy);
});

//DOM document object model

