class Book
{
title:string
author:string
publicationYear:number
genre:string
constructor(title:string,author:string,publicationYear:number,genre:string)
{
    this.title=title;
    this.author=author;
    this.publicationYear=publicationYear;
    this.genre=genre;}
displayDetails():void{
console.log(`The title of book is:${this.title}`);
console.log(`The author of book is:${this.author}`);
console.log(`The publicatonYear of book is:${this.publicationYear}`);
console.log(`The genre of book is:${this.genre}`);}
isRecent():boolean{
const currentYear=new Date().getFullYear();
return currentYear-this.publicationYear<=5;}
changeGenre(newGenre:string):void
{
this.genre=newGenre;
}
isAuthor(authorName:string):boolean
{
return this.author===authorName;
}}
const myBook=new Book("Islamic Repulic of Pakistan","mahnoor fatima",2018,"History");
myBook.displayDetails();
console.log(myBook.isRecent());
myBook.changeGenre("International Relations");
myBook.displayDetails();
console.log(myBook.isAuthor("mahnoor fatima"));


//problem 2
interface Person{
    name:string;
    age:number;
    email:string;
    phone:string,
    addresses:Address[];}
interface Address{
    street:string;
    city:string;
    state:string;
    zipcode:string;}
function findPersonByCity(people: Person[], city: string): { name: string; email: string } | undefined {
    for (const person of people) {
        for (const address of person.addresses) {
            if (address.city === city) {
                return { 
                    name: person.name, email: person.email 
                };}}}
    return undefined;
}
const people: Person[] = [ {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        phone: "555-1234",
        addresses: [
            { street: "123 Main St", city: "Anytown", state: "CA", zipcode: "90210" },
            { street: "456 Oak St", city: "Othertown", state: "TX", zipcode: "73301" }
        ]
    }, 
    { name: "Jane Smith",
        age: 25,
        email: "jane.smith@example.com",
        phone: "555-5678",
        addresses:
         [
            { street: "789 Pine St", city: "Anytown", state: "CA", zipcode: "90210" }, { street: "101 Maple St", city: "Differentown", state: "FL", zipcode: "33101" } 
        ]}];
const result = findPersonByCity(people, "Anytown");
if (result) 
    {
    console.log(`Name: ${result.name}, Email: ${result.email}`);
    }   
    else 
    {
        console.log("No person found in the specified city.");
    }