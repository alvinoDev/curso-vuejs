/*

// =============== Object Destructuring ===============

let person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    pets:["dog", "cat", "rabbit"]
};

// First way to access object properties
// let name = person.name;
// let lastName = person.lastName;
// let age = person.age;
// let city = person.city;
// let pets = person.pets;

// console.log(name, lastName, age, city, pets);


// Second way to access object properties
let { name, lastName, age, city, pets } = person;
console.log(name, lastName, age, city, pets);

*/

// =============== Promises ===============

/*
let data = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        age: 30,
        city: "New York",
    },
    {
        id: 2,
        name: "Carlos",
        lastName: "Velasquez",
        age: 25,
        city: "Bogota",
    },
    {
        id: 3,
        name: "Juan",
        lastName: "Perez",
        age: 30,
        city: "Bogota",
    }
];
*/

// Traditional way to get data
/*

function getData() {
    setTimeout(() => {
        return data;
    }, 2000);
}

let response = getData();

console.log(response);

*/

// Promise way to get data (Se ejecuta de forma asíncrona)
/*

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

let response = getData();

response.then((data) => {
    console.log(data);
});

console.log("Programa continua");
*/

/*
// Capturando errores
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve(data);
            } else {
                reject("Error: No se pudo obtener los datos");
            }
        }, 2000);
    });
}

let response = getData();

response.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log("Programa continua");
*/

// ================ Promises with Async/Await ===============
/*
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(data);
            } else {
                reject("Error: No se pudo obtener los datos");
            }
        }, 2000);
    });
}

async function fetchData() {
    let response = await getData();//Espera a que la promesa se resuelva
    console.log(response);
}

fetchData();

console.log("Programa continua");
*/


// Capturando errores con Async/Await
/*
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve(data);
            } else {
                reject("Error: No se pudo obtener los datos");
            }
        }, 2000);
    });
}

async function fetchData() {
    try {
        let response = await getData();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

console.log("Programa continua");
*/


// Petición HTTP con Fetch

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));