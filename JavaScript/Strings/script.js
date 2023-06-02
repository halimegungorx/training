console.log("All about String in JS")

let variable1 = "Web Development"
let variable2 = "course"
//console.log(variable1+" "+variable2)

// let variable3 = variable1.concat(" ",variable2)
// console.log(variable3)

// variable1 = variable1.concat(' ',variable2)
// console.log(variable1)

let html = '<h1> Heading1 </h1> <p> Paragraph </p> dfnv';
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[5]);
console.log(html.indexOf('/')); 
console.log(html.charAt(6));
console.log(html.endsWith('dfnv')); // output: true-false
console.log(html.includes('Hea')) // output :true or false
console.log(html.substring(1,6))
console.log(html.slice(0,10))
console.log(html.split('>')) // > 
console.log(html.replace('Heading','Course')) //writes course instead of heading

let item1 = "Android"
let item2 =  "Ios"
let html2 = `<h1>Hi I use ${item1}</h1> <h3>and my friend uses ${item2} <h/3>`
console.log(html2)
document.body.innerHTML = html2;