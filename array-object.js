/* let p1 = {
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
  ); */
  
  // console.log("color for kitchen is:",rooms[0].color) way to access through objects in arrays
  
  /* TEMPLATE LITERAL - MUST KNOW FOR REACT / string literal
  BACK TICK  ` - ESCAPE KO TALA  */
  
  
  let greeting = "Nihao"
  
  console.log(greeting,"world")
  console.log(greeting+' world')
  console.log(`${greeting} world`)
  
  
  // kitchen room has green color
  // living room has pink color using string literals `
  
  /* console.log(`${rooms[0].room} room has ${rooms[0].color} color`)
  console.log(`${rooms[1].room} room has ${rooms[1].color} color`) */
  
  let rooms = [
    {
        room: "kitchen",
        color: "green",
        height: 10,
        width: 10,
        length: 10,
        measurentUnit: "feet"
    },
    {
        room: "living",
        color: "pink",
        height: 10,
        width: 10,
        length: 15,
        measurentUnit: "feet"
    }
]
console.log(`color of ${rooms[0].room} room is ${rooms[0].color}`)
console.log(`color of ${rooms[1].room} room is ${rooms[1].color}`)

/* color of kitchen room is green /
/ color of living room  is pink */

// to access arrays with index
let fruits = ['apple', 'orange']
/* code here to add kiwi in fruits array */
fruits[1] = "kiwi" 
console.log("fruits:",fruits)  // after apple, kiwi
// to add new fruits
console.log(fruits[2])
fruits[2] = "pineapple"
console.log("fruits:",fruits) 
// add banana
// fruits.push =


console.log("__________________")
console.log("\n\n")
console.log("hello world") // for space

// to access objects with keys
let room1 = {
    room: "one",
    color: "red",
    length: 10,
    member:[{
        name: "ram",
        start: "feb 1 2023" ,
        address:{
            street:"kumari galli",
            ward: 16
        }
    },
    {
        name:"shyam",
        start:"jan 1 2050"
    }]
}

console.log(room1.member) // accessing step by step

// to change date in start
room1.member[1].start = "jan 1 2023"
console.log("updated start date:",room1)


// to change room color
console.log("old color:",room1.color)
room1.color = "pink"
console.log("new color:",room1.color)

//adding values
console.log(room1.windowCount)
room1.windowCount = 2
console.log(room1)

//add phone no. to ram and shyam
// console.log(room1.member[0].phone)

room1.member[0].phoneNo = 11111
room1.member[1].phoneNo = 22222
console.log(room1)

room1.member[2] = {
    name: "hari",
    start: "jan 2 2023",
    phoneNo:33333
}
console.log(room1)









