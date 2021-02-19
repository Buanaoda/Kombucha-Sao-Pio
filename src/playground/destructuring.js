// //JMJ

// // OBJECT DESTRUCTURING
// //Person
// const person = {
//     name: 'Joseph',
//     age: 33,
//     location: {
//         city: 'Nazareth',
//         temp: 38
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} degrees in ${city}.`);
// }

// //Book
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city , state = 'New York'] = address

// console.log(`you are in ${city} ${state}`);

const item = ['Coffe(hot)', '$2.00', '$2.50', '$2.75']

const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`)