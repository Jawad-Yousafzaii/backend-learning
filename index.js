// fundimantals of javascript
//arrays and objects
//function returns
//async js coding

// foreach map filter find and indexOf

let val = [1, 2, 3, 4];
val.forEach(function (val) {
  console.log(val + " hello");
});

//map gives us a new array with the same length as the original array
// it applies a function to each element of the array and returns a new array with the results

let arr = [1, 2, 3, 4];
let newarray = arr.map(function (val) {
  return val * 10;
});
// console.log(newarray);

// so here is a new function in which we will be using the  filter method

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = numbers.filter(function (value) {
  if (value >= 2) {
    return true;
  } else return false;
});
// console.log(answer)

// and here is the find method
let find = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findaswer = find.find(function (value) {
  if (value == 4) {
    return value;
  }
});
console.log(findaswer);

const abcd = () => {
  return 20;
};

let helo = abcd()


async function khan() {
    let khano = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await khano.json();
    console.log(data);
}

khan();




//find index of the array .. for that the indexOf method is used

//expert examplees

// an expert example fo foreach
// const users = [
//   { id: 1, firstName: 'Ali', lastName: 'Khan', active: true, role: 'admin', email: 'ali@example.com' },
//   { id: 2, firstName: 'Sara', lastName: 'Noor', active: false, role: 'user', email: 'sara@example.com' },
//   { id: 3, firstName: 'Omar', lastName: 'Raza', active: true, role: 'admin', email: 'omar@example.com' },
// ];

// let adminEmails = [];
// let inactiveCount = 0;

// users.forEach((user, index, array) => {
//   const fullName = `${user.firstName} ${user.lastName}`;
//   console.log(`User #${index + 1}: ${fullName}`);

//   if (!user.active) {
//     console.warn(`⚠️ Inactive account: ${fullName}`);
//     inactiveCount++;
//   }

//   if (user.role === 'admin') {
//     adminEmails.push(user.email);
//   }

//   array[index].fullName = fullName;
// });

// console.log(`Total inactive users: ${inactiveCount}`);
// console.log('Admin emails:', adminEmails);

// expert example for find
// Mock product data - assume this is cached in memory
// const products = [
//   { id: "p101", name: "Laptop", price: 1200, stock: 5 },
//   { id: "p102", name: "Mouse", price: 25, stock: 0 },
//   { id: "p103", name: "Keyboard", price: 55, stock: 10 },
// ];

// // Express route to get a product by ID
// app.get("/products/:id", (req, res) => {
//   const productId = req.params.id;

//   const product = products.find(p => p.id === productId);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.json({
//     id: product.id,
//     name: product.name,
//     inStock: product.stock > 0,
//   });
// });

// Situation	Function Use
// Har item pe action chahiye (log ya save) >>	forEach
// Naye format ke data ki list chahiye	map
// Ek specific object dhoondhna ho (e.g., user with email)	>>find
// Simple value ka position chahiye	>> indexOf
// Saare matching results chahiye	filter (bonus tip)
