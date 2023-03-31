// 1- SINGLE ELEMENT SELECTOR
// >>documet.getElementById() 

// let x = document.getElementById("demo");
// x.style.color = "green"

// x.innerText = "<b>Heading 1</b>"//h1 changed and <b> tag is show
// x.innerHTML = "<b>Heading 1</b>"///h1 changed and <b> tag is not show, h1 bold
// // x =  x.className; 
// // console.log(x);

// let y = document.getElementById("test");
// y= y.childNodes;
// console.log(y);

// >>querySelector()

//all the same thing
// let x = document.querySelector("#demo");
// let x = document.querySelector(".heading1");
// let x = document.querySelector("h1");
// x.style.color = "yellow";

// 1- MULTI ELEMENT SELECTOR

// querySelectorAll()
let b = document.querySelector("div");
console.log(b);

//getElementsByTagName()
let article = document.getElementsByTagName("article");
console.log(article);

for (let i = 0; i < article.length; i++){
    article[i].style.border = "2px solid green";
}

// getElementsByClassName()

let n = document.getElementsByClassName("heading1");
console.log(n);

