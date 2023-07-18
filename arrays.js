// 13th july
/* variables - container box that stores some value */
/* datatypes -
(primitive datatypes)
1) string - text
2) number - integer or decimal
3) booleans- true or false 
4) undefined - in js only
5) null - for empty values 
(non-primitive datatypes / collections / reference data types)
1) array
2) object
*/


let prices = 1000
let inStock = true
/* declaration and initialization */
let color; //color variable declared but no value assigned
console.log("color:",color) //undefined vanera aaucha
color = "red" //color variable is initialiazed
console.log("after color:",color)

color = "red" //color variable is initialized
color = "white" //re-initializzed
console.log("after color:",color)

var count;
console.log("before count:", count)
count = 100
count = 200
count = 300
console.log("after count:",count)

const PI = 3.14
const ROTATION = "W-E"
// ROTATION = "E-W" const variable cant be re-initialized

var count = 30000 //can be re-declared
console.log("count:",count)

let brand = "nike" //string
// brand = "puma" cannot create the same variable if declared using let keyword
/* same with const */

//let status = undefined //dina milcha but usually dinnau
let data = null //empty //when we have to defined data as empty explicitly


let fruit1 = "apple"
let fruit2 = "orange"
let fruit3 = "kiwi"

// let fruits = "apple","orange" cant be written like this
/* Array 
  - collection of different values */
let fruits = ["apple","orange","kiwi"]
console.log(fruits)

/* Objects */
/* let projector_name = "dlp"
let projector_color = "black"
let projector_price = 50000

let projector_name1 = "acer"
let projector_color1 = "grey"
let projector_price1 = 40000
yesari vanda tala ko way ma easy
 */
let projector1 = {
    name:"dip",
    color:"black",
    price : 5000

}
projector1.price=4000
// to re-initialize the object value in js
let projector2 = {
    name:"acer",
    color: "grey",
    price: 4000
}
console.log(projector1)

// how to re-initialize object value in javascript

