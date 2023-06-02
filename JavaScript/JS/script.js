// // 1- SINGLE ELEMENT SELECTOR
// // >>documet.getElementById()

// // let x = document.getElementById("demo");
// // x.style.color = "green"

// // x.innerText = "<b>Heading 1</b>"//h1 changed and <b> tag is show
// // x.innerHTML = "<b>Heading 1</b>"///h1 changed and <b> tag is not show, h1 bold
// // // x =  x.className;
// // // console.log(x);

// // let y = document.getElementById("test");
// // y= y.childNodes;
// // console.log(y);

// // >>querySelector()

// //all the same thing
// // let x = document.querySelector("#demo");
// // let x = document.querySelector(".heading1");
// // let x = document.querySelector("h1");
// // x.style.color = "yellow";

// // 1- MULTI ELEMENT SELECTOR

// // querySelectorAll()
// let b = document.querySelector("div");
// console.log(b);

// //getElementsByTagName()
// let article = document.getElementsByTagName("article");
// console.log(article);

// for (let i = 0; i < article.length; i++){
//     article[i].style.border = "2px solid green";
// }

// // getElementsByClassName()

// let n = document.getElementsByClassName("heading1");
// console.log(n);

//  Children Parent and Traversing the DOM

// let x = document.querySelector('.container')
// //  console.log(x.childNodes); //all children
// //  console.log(x.children);

//  let nodeName = x.childNodes[14].nodeName;
//  console.log(nodeName);

//  let nodeName2 = x.childNodes[1].nodeType;
//  console.log(nodeName2);

// // Node Types
// //1. Element
// //2. Attributes
// //3. Text Node
// //8. Comment
// //9. Document
// //10. Doctype

// // let container = document.querySelector('div.container');
// // console.log(container.children[0].children[0]);
// // console.log(container.firstChild) // --> #text
// // console.log(container.firstElementChild)// --> div.dummy
// // console.log(container.lastChild)// --> #text
// // console.log(container.lastElementChild) // -->article-10
// // console.log(container.childElementCount)// -->18
// // console.log(container.firstElementChild.parentNode)// --> div.container
// // console.log(container.firstElementChild.nextSibling)// --> #text
// // console.log(container.firstElementChild.nextElementSibling)// --> div.dummy

// Events and Event Handlers
// document.getElementById("containerId").addEventListener("click",function(e){
//     let variable;
//     variable= e.target;
//     variable= e.target.className;
//     variable= e.target.id;
//     variable= e.target.classList;
//     variable = e.offsetX;
//     variable = e.offsetY;
//     variable = e.clientX;
//     variable = e.clientY;
//     console.log(variable);
//     // console.log("You have clicked h1 tag")
// })

//OOP
// Object created using object literal
// var motorcycle = {
//     brand : 'Kawasaki',
//     model: 'Ninja',
//     year : 2000
// }
// console.log(motorcycle);

// // Object created using constructor function
// function MyMotor(brand,model,year){
//     this.brand = brand,
//     this.model = model,
//     this.year = year
// }

// // Create Object
// let bikes = new MyMotor("Honda","CBR",2010);
// console.log(bikes)

// OBJECT PROTOTYPE İN JS

// Object.prototype
// toString()
// valueOf()
// hasOwnProperty()
// isPropertyOf()
// propertyIsEnumerable()
// toLocaleString()
// toString()
// valueOf()
// function Motorcycle(){
//     this.brand = "Kawasaki"
//     this.model = "Ninja"
// }
// Motorcycle.prototype.motoGp = function(){
//     console.log("Always wear a helmet whileriding / racing motorcycle")
// }
// let bikes = new Motorcycle();
// bikes.toString();
// //bikes_proto_link

// Prototype Inheritance
// const myInfo = {
//     isMale: true,
//     Bio : function(){
//         console.log(`My name is ${this.name} Am I male? ${this.isMale}`)
//     }
// }
// const mySelf = Object.create(myInfo);
// mySelf.name = 'John';
// mySelf.Bio();

// ES6 Classes and Inheritance
// class SimpleDate{
//     constructor(givenYear, givenMonth, givenDay){
//         this.year = givenYear;
//         this.month = givenMonth;
//         this.day = givenDay;
//     }
//     addMonth(nMonths){

//     }
//     getMonth(){
//         return this.month;
//     }
// }

// class car { //parent class
//     constructor(givenName,givenYear){
//         this.name = givenName;
//         this.year = givenYear;
//     }
//     greet(){
//         return `${this.name} says hello`
//     }
// }
// class Bike extends car{ //bike is child class
//     constructor(givenName,givenYear,givenSpeed){
//         super(givenName,givenYear); //inherited from the car/parent class
//         this.speed = givenSpeed;
//     }
// }
// const bike1 = new Bike("Suzuki",2014,400);
// const car1 = new car('BMW',2020);

//Synchronus programming

// function fun2(){
//     console.log("Fun2 is running2");
// }

// function fun1(){
//     console.log("Fun2 is running1");
//     fun2();
//     console.log("Fun1 is ended")
// }
// fun1();

//Asynchronus programming

// function fun2(){
//     setTimeout(function(){
//         console.log("Fun2 is running");
//     }, 10000);
// }
// function fun1(){
//     console.log("Fun1 is running");
//     fun2();
//     console.log("Fun1 has ended");
// }
// fun1();
// --->> output : Fun1 is running ,Fun1 has ended , Fun2 is running(10 seconds later)

// Arrow Functions
// const fun1 = () => {
//     console.log("This lecture is about arrow fuction")
// }
// fun1();

//Arrow Functions in 1 line
// const fun1 = () => "This is one liner arrow function";
// console.log(fun1());

// //When you want to pass 1 argument to your arrow function
// const fun1 = name => "Hello " + name;
// console.log(fun1("John"));

// //When you want to pass multiple argument to your arrow function
// const fun1 = (name, surname) => "Hello " + name + " " + surname;
// console.log(fun1("John","Jackson"));

// BASIC SYNTAX OF FETCH API

// fetch('URL').then(response =>{
//     // handle response data
// }).catch(err =>{
//     //handle error
// })

// fetch('URL').then(res => {
//     res.json();
// }).then(json =>{
//     console.log(json);
// })

//Syntax of GET request in JSON format
// function getdata(){
// fetch('https://api.github.com/orgs/nodejs').then(response =>{
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })
// }
// getdata();

// GET data in XML format
// function getdata(){
//     url = "getdata.txt"
//     fetch(url).then(response =>{
//         return response.text();
//     }).then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.log(error);
//     })
//     }
// getdata();

// // Syntax for POST request
// let data = {
//     first_name : "Halime",
//     last_name: "Gungor",
//     job_title : "Computer Science"
// }

// const options = {
//     metod : "POST",
//     body : JSON.stringify(data),
//     headers : {
//         "content-type" : "application/json"
//     }
// }
// fetch("url", options).then(res => {
//     res.json();
// }).then(res =>{
//     console.log(res);
// })

//Syntax to create a Map
const exampleMap = new Map();
console.log(exampleMap);

// To insert elements in a map we use the set()
let map1 = new Map();
map1.set("info", { name: "Jack", age: 30 });
map1.set("bio", { name: "Sam", age: 20 });
map1.set("key", { name: "Alice", age: 15 });
console.log(map1);

// You can also use objects or functions as keys
let map2 = new Map();
let obj = {};
map2.set(obj, { name: "John", age: 40 });
console.log(map2);

//You can also access the map elements using the get()
console.log(map1.get("info"));

//You can use the has() to check if element is in map
console.log(map1.has("info"));

//You can use the clear() and delete() to remove elements from map
map1.delete("address");
console.log(map1);

// map1.delete("info");
// console.log(map1);

// map1.clear();
// console.log(map1);

//With the help of size property you can get the number of elements present in the map
console.log(map1.size);

//You can also  iterate through a map element using forOf or forEach loop
for (let [key, value] of map1) {
  console.log(key + "-" + value);
}

// You can iterate over a map and get a key using keys()
map1.set("name", "Tom");
map1.set("age", 60);

//loop through the map
for (let key of map1.keys()) {
  console.log(key);
}

//You can iterate over a map and get a using values()
for (let values of map1.values()) {
  console.log(values);
}

//You can iterate over a map and get a key/value using entries()
for (let values of map1.entries()) {
  console.log(`${entries[0]} : ${entries[1]}`);
}
