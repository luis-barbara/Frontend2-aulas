
// Basic Interface
interface User {
    name: string
    location: string
    age: number | string
    email: string
    role: "User" | "Admin" | "Client" | "Manager"
}

// Creating an object that adheres to the User interface
const user : User = {
    name: "John",
    location: "Faro",
    age: 30,
    email: "john@example.com",
    role: "User"
}


// Extending Interfaces
interface Animal {
    nome: string;
}    

interface Dog extends Animal {
    age: number;
}

const myDog: Dog = {
    nome: "Rex",
    age: 5
}

// Intersection Types
type A = { name: string };
type B = { age: number };

type C = A & B;

const person: C = {
    name: "Alice",
    age: 28
}