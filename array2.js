// 14th july

let count = 100; //declaration and initialize
let brand; //declaration
brand = "nike"; //initialization
brand = "puma"; //re-initialize
let inStock = true;
let color;
console.log("color", color); //undefined

/* array and objects */
/* ARRAY SYNTAX 
    array - syntax
    let <arrayVariable> = [<element1>,<element2>,<element3>..]
 */

/* object syntax -
        let obj = {
            key:value,
            property:value,

        }
    */
// let courses = "web","mern","python"
// let courses = ["web","mern","python"]

let course1 = {
  name: "web", //esari string ma ni dinu milcha
  duration: 2,
  price: 15000,
};

let course2 = {
  name: "mern",
  duration: 3,
  price: 15000,
};

let course3 = {
  name: "python",
  duration: 2.5,
  price: 15000,
};

let courses = [course1, course2, course3]; //can keep objects in array
// alternate way let courses = [course1,course2,course3,{title:"graphic",price:15000}]
console.log(courses);

let ages = [10, 20, 30, "thirty", { title: "none" }, null, undefined]; //can keep numbers in array but not viable
console.log("ages", ages);

let activeStatus = [true, false, true]; //can keep booleans in array

// f12 fake dummy json
/* arrays are mostly collection of data but they contain mostly similar data type's collection */

// ways to access elements in arrays
// let colors = ["element1","element2","element3"]
// let colors = [0th index, 1st index,2nd index]
let colors = ["red", "white", "teal"];
// console.log({"colors":colors})
// console.log({colors:colors})
console.log({ colors }); //sab same ho mathi ko ni

// to access white
// INDEXES IN ARRAY !!! IMPORTANT - index always starts with 0
console.log("in 0st index we have:", colors[0]);
console.log("in 1st index we have:", colors[1]);
console.log("in 2st index we have:", colors[2]);

let projectorColor = "white";
projectorColor = "black";

colors[2] = "cyan"; // to change the color teal in the array through indexing
console.log("after -- in 2nd index we have:", colors[2]);

// to create new array of colors which has both name and hex values
let newColors = [
  { name: "red", hexValue: "#F0000" },
  { name: "white", hexValue: "#FFFF" },
  { name: "teal", hexValue: "#r765v" },
];
console.log("colors and their hex values", newColors);

// july 16
/* let rooms = [
  { room_no: 1, roomColor: "blue" },
  { room_no: 2, roomColor: "red" },
  { room_no: 3, roomColor: "pink" },
]
console.log(rooms) */

// not much need to create variables when we can create them directly as shown below
/* let room1 = "kitchen";
let room2 = "living";
let room3 = "bedroom";
let room4 = "bedroom2"; */
//objects
/* let room5 = {
  room: "kitchen",
  color: "green",
  height: 10,
  width: 10,
  unit: "feet",
};

let room6 = {
  room: "living",
  color: "pink",
  height: 10,
  width: 10,
  unit: "feet",
}; */

// let rooms = [room1,room2]
let rooms = [
  {
    room: "kitchen",
    color: "green",
    height: 10,
    width: 10,
    length: 15,
    measurementUnit: "feet",
  },
  {
    room: "living",
    color: "pink",
    height: 10,
    width: 10,
    length: 15,
    measurementUnit: "feet",
  },
];
console.log("rooms:", rooms);

// let arrIndexes = [0,1,2,3]
let fruits = ["apple", "orange", "kiwi", "pineapple"];
console.log(fruits[1]); //to just print orange

/* key, property,attribute,field : <value> 
in array, we return value through index number, in object through keys */
let p1 = {
  brand: "sonic",
  price: 50000,
  model: "xyz",
};
let p2 = {
  brand: "acer",
  price: 70000,
  model: "xyz-100",
};
let p3 = {
  brand: "acer",
  price: 20000,
  model: "xyz",
};

console.log(
  "Price of",p1.brand,p1.model,"is:",
  p1.price,
  ",Price of",p2.brand,p2.model,"is:",
  p2.price,
  "and price of",p3.brand,p3.model,"is:",
  p3.price
);

// console.log("color for kitchen is:",rooms[0].color) way to access through objects in arrays

/* TEMPLATE LITERAL - MUST KNOW FOR REACT / string literal
BACK TICK  ` - ESCAPE KO TALA  */


let greeting = "Nihao"

console.log(greeting,"world")
console.log(greeting+' world')
console.log(`${greeting} world`)


// kitchen room has green color
// living room has pink color using string literals `

console.log(`${rooms[0].room} room has ${rooms[0].color} color`)
console.log(`${rooms[1].room} room has ${rooms[1].color} color`)