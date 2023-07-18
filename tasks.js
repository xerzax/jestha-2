// task 1
// console.log("unwanted buggy code")
console.log("Hello World!");

// task 2
// let fullName = "Ram Rai"
// console.log(fullName)

// tasks 2.1
let full_name = "javascript";
console.log("name is", full_name);

// task 2.2
let first_name = "John";
let last_name = "Doe";
const age = 16;

console.log("name is " + first_name + " " + last_name);
console.log("and age is " + age);

// task 2.3
let job_status;
job_status = "true";
console.log(job_status);
// output shows undefined but after initializing with value it works

// task 2.4
let fullName = "john Doe";
console.log(fullName);

// task 2.5
var country = "Nepal";
var country = "USA";

console.log(country);

let state = "Province One";
state = "Province Two";
console.log(state);

// const PI = 3.141592653589793
const PI = 3.14;
console.log(PI);
// constant's value cant be changed

// task 2.6
let a = 1;
let b = 2;

c = b;
b = a;
a = c;

console.log("output a:", a, "output b:", b);

// task 2.7
// first method using escape character
console.log('double quote = ""');
/* there is an error with the double quotes usage within the string. JavaScript interprets the second pair of double quotes ("") as an empty string, which results in a syntax error. */
//second method using template literal
console.log('double quote = ""');

// Objects task
// task 1 - ans

let monitor = {
  model: "samsung",
  hertz: 120,
};
console.log(monitor);

//task 2
/* let  obj = {
    name:"john",
    "1":"one"
}
console.log(obj.1) dont know atm */

//task 3
let obj = {
  name: "ram",
  Name: "shyam",
};

console.log(obj.name);
console.log(obj.Name);
// answer
obj.name = "John Doe";
console.log("name is", obj.name);

// Array tasks
//task 1
let brands = ["apple", "samsung", "lg", "Nokia"];
console.log(brands);
console.log("in second element,we have:", brands[1]);

brands[1] = "sony";
console.log(`in second place we have ${brands[1]}`);

// task 2
let students = [
  {
    roll: 1,
    courses: ["web", "mobile"],
  },
  {
    roll: 2,
    courses: ["web", "Graphic"],
  },
];

students[1].courses[1] = "io Mobile";
console.log(students[1]);

// task 3 nested array
let newStudents = [
  {
    roll: 1,
    name: "Ram",
    courses: {
      name: ["iot", "python", "java"],
      price: 100,
      duration: 2,
    },
  },
  {
    roll: 2,
    name: "Sita",
    courses: {
      name: ["iot", "python", "java", "css"],
      price: 200,
      duration: 3,
    },
  },
];
console.log(newStudents[1].courses.name); //accessing at its best lmao

