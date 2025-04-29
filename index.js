// Create a function constructor called Employee that accepts a name, position, and salary. 
// Create an array of 5 employees. Write a program that increases the salary by 10% for employees 
// who have the position "developer" and print the updated employee list. (5 pts)
function Employee(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
};
const employees = [
    new Employee("Fiona", "CEO", 1000000),
    new Employee("Jabal", "Senior developer", 500000),
    new Employee("Bravin", "developer", 120000),
    new Employee("Lisa", "developer", 70000),
    new Employee("Achichi", "manager", 55000)
];
 
employees.forEach(employee => {
    if(employee.position === "developer"){
        employee.salary *= 1.10;
    };
});

console.log(employees);  

// Given an array of product objects (each with name, price, and inStock properties), write a function 
// that returns a new array containing only the products that are inStock: true, and sort the available
//  products by price in ascending order. (5 pts)
const productsArray = [
       {name: "trousers",price: 1000, instock:true},
       {name: "blouses",price: 500, instock:true},
       {name: "shirts",price: 1200, instock:false},
       {name: "shorts",price: 200, instock:true},
       {name: "socks",price: 100, instock:false},
       {name: "dresses",price: 1500, instock:false},
];

function sortedProducts(productsArray){
    return productsArray.filter(product => product.instock)
                        .sort((a,b) => a.price - b.price);
}
 const availableProducts = sortedProducts(productsArray);
 console.log(availableProducts);


// Create an object called grades where the keys are student names and the values are arrays of their 
// scores. Write a function that calculates and prints each student's average score, and if the average
//  is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)
// Function to calculate and print averages
const studentsScores = {
fiona:[80,90,100],
metrine:[90,80,50],
titus:[20,10,40]
}
// function avgScores(grades){
//     for(student in grades){
//         let scores=grades[student];
//         let total=scores.reduce((a,b)=>a+b,0);
//         let average=total/scores.length;
//         let status;
//         if(average>70){
//           status="Pass";
//         }
//         else{
//             status="Fail";
//         }
//         console.log(`${studentScores}: Average=${average.toFixed(2)} - ${status}`);
//     }
// }
// avgScores(grades);



// Write a function constructor called User that takes username, email, and isActive (boolean).
//  Create an array of users. Write a program that loops through the array and deactivates users
//  who have not logged in recently (simulate this with a random isActive: false assignment) and
//  print out the usernames of active users. (5 pts)
function User(username,email,isActive){
    this.username = username;
    this.email = email;
    this.isActive = isActive;
};
const usersDetails = [
    new User("fiona20", "fiona20@gmail.com", true),
    new User("Js123", "js123@gmail.com", true),
    new User("Yyy2", "user3@example.com", true),
    new User("67french4", "67french4@gmail.com", true),
    new User("universe", "universe@gmail.com", true)
];
for(let user in usersDetails){
    if(user.isActive){
        console.log(user);
    }
}

// You have an array of destination objects, each with name, distance (in km), and budgetRequired
//  (in dollars). Write a function that accepts a maximum distance and a budget and returns all 
// destinations the user can afford and reach within that distance. If none are found, return "No
//  destinations available under your budget and distance".
// Array of destination object

// Function to find available destinations
function filterDestinations(maximumDistance, maximumBudget) {
    let available = destinationsArray.filter(destination => 
        destination.distance <= maximumDistance && destination.budget <= maximumBudget
    );

    if (available.length === 0) {
        return "No destinations available under your budget and distance.";
    } else {
        return available;
    }
}
let destinationsArray = [
    { name: "Maldives", distance: 250, budget: 200 },
    { name: "Miami", distance: 100, budget: 500 },
    { name: "NewYork", distance: 80, budget: 100 },
    { name: "Mauritius", distance: 400, budget: 800 },
    { name: "Addis Ababa", distance: 30, budget: 50 }
];

let  completeDestinations = filterDestinations(900, 200)
console.log(completeDestinations)
