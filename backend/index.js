//Lecture 1
// const name = "john";
// console.log(name);

// const fs= require("fs");
// This below line of node command is to create a file and add content insie it 
// fs.writeFileSync("read.txt", "Node.js is backend");
// fs.writeFileSync("read.txt", "React.js is frontend");  // write "node index.js" in terminal -> write "React.js is frontend" in read.txt

//Node command to read data from specified file (returns buffer data)
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data); //Buffer data is the location of your file in the in your memory

//returns string data
// const org_data = buf_data.toString();
// console.log(org_data); 

//Node command to rename my file
// fs.renameSync("read.txt", "readwrite.txt");

// CRUD Operations using FS modules


//Lecture 2
// const fs = require("fs");

// challange #1 --> Create a folder named "CRUD"
// fs.mkdirSync("CRUD");

// challange #2 --> Create a file in it named "readme.txt" and add data in it
//fs.writeFileSync("CRUD/readme.txt", "This is a read file");

// challange #3 --> Add more data in "readme" file
//fs.appendFileSync("CRUD/readme.txt"," This is appended data");

// challange #4 --> Read data without getting the buffer data at first
// const data = fs.readFileSync("CRUD/readme.txt","UTF-8");
// console.log(data);

// challange #5 --> Rename the file name to "info.txt"
//fs.renameSync("CRUD/readme.txt", "CRUD/info.txt");

// challange #6 --> Delete both file and folder
// fs.unlinkSync("CRUD/info.txt");
//fs.rmdirSync("CRUD"); //delete CRUD folder


//Lecture 3
// const fs = require("fs");

// fs.writeFile("readme.txt","Hello world", (err) => {
//     console.log("Mission accomplished");
// })

// fs.appendFile("readme.txt", " Node.js is very easy to learn", (err) => {
//     console.log("Data has been appended");
// })

// fs.readFile("readme.txt", "UTF-8" ,(err,data) => {
//     console.log(err);
//     console.log(data);
// })


//Lecture 4
// const fs = require("fs");

// // const data = fs.readFileSync("readme.txt", "UTF-8");
// // console.log(data)
// // console.log("Mission accomplished, good work");

// fs.readFile("readme.txt", "UTF-8", (err,data) => {
//     console.log(data);
// })
// console.log("Mission accomplished, good work");


//Lecture 5 - Asynchronous CRUD operations

// const fs= require("fs");
// challange #1 --> Create a folder named "AsyncCRUD"
// fs.mkdir("AsyncCRUD", (err) => {
//     console.log(err);
// })

// challange #2 --> Create a file in that folder and name it "readme.txt" and some data
// fs.writeFileSync("AsyncCRUD/readme.txt", "Random data", (err) => {
//     console.log(err);
// })

// challange #3 --> Add more data into the file at end of existing data
// fs.appendFile("AsyncCRUD/readme.txt", " data appended", (err) => {
//      console.log(err);
// })

// challange #4 --> Read the data without getting the buffer data at first
// fs.readFile("AsyncCRUD/readme.txt", "utf-8", (err,data) => {
//     console.log(data);
// })

// challange #5 --> Rename the file to "info.txt"
// fs.rename("ASyncCRUD/readme.txt", "ASyncCRUD/info.txt", (err) => {
//     console.log(err);
// })

// challange #6 --> Delete the file
// fs.unlink("ASyncCRUD/info.txt", (err) =>{
//     console.log(err);
// })

// challange #7 --> DElete the folder
// fs.rmdir("ASyncCRUD", (err) =>{
//     console.log(err);
// })


//Lecture 6 - OS Module in Node.js
// const os = require('node:os'); 
// console.log(os.arch());

// const freeMemory = os.freemem();
// console.log(freeMemory);
// console.log(`${freeMemory/1024/1024/1024}`);

// const totalMemory = os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`);

// console.log(os.hostname());//DESKTOP-2QBSS7I
// console.log(os.platform()); // win32
// console.log(os.type()); // Windows_NT


//Lecture 7 - Path Module in Node.js
// const path = require("path");

// console.log(path.dirname("C:/Users/90535/Desktop/web-ex-hg/backend/index.js"))
// console.log(path.extname("C:/Users/90535/Desktop/web-ex-hg/backend/index.js"))
// console.log(path.basename("C:/Users/90535/Desktop/web-ex-hg/backend/index.js"))
// console.log(path.parse("C:/Users/90535/Desktop/web-ex-hg/backend/index.js"))

// const myPath= path.parse("C:/Users/90535/Desktop/web-ex-hg/backend/index.js");
// console.log(myPath.root);


//Lecture 8 - Create & Export your own modules in Node.js
// import.js and export.js file


//Lecture 9 - Complete NPM
// const chalk = require("chalk"); // npm i chalk@4.1.0
// const validator = require("validator");  // npm i validator

// console.log(chalk.red.inverse("hello world"));

// const result = validator.isEmail("google@google.com");
// console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));


// Lecture 10 - Nodemon in Node.js
//  npm start => "start": "nodemon index.js" in package.json


// Lecture 11 - Module Wrapper Function in Node.js 
// (function(exports, require, module, __filename, _dirname){
//     var name = "hello world";
//     console.log(name);
// }) ();

// Lecture 12 - Creating HTTP Server in Node.js

// const http = require("http");

// const server = http.createServer((req,res) => {
//     res.end("Hello from server side");
// }) // If we type localhost:8000 to google, we get the res.end message

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening on port 8000");
// })


// Lecture 13 - Routing in Node.js

// const http = require("http");

// const server = http.createServer((req,res) => {
//     // console.log(req.url);
//     if(req.url == "/"){
//         res.end("This is your Home page");
//     } 
//     else if(req.url == "/about"){
//         res.end("This is your About page");
//     }
//     else if(req.url == "/contact"){
//         res.end("This is Contact page");
//     }
//     else{
//         res.writeHead(404, {"content-type": "text/html"});
//         res.end("<h1>Error 404 page not found<h1>");
//     }

// }) ;

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening on port 8000");
// })

// Lecture 14 - JSON in Node.js

// const fs = require("fs");
// const bioData = {
//     name: "Sammy",
//     age: 24,
//     skill : "Node.js"
// };

// // console.log(bioData);

// const jsonData = JSON.stringify(bioData);
// // fs.writeFile("testjson.json", jsonData, (err) => {
// //     console.log("Process completed");
// // })
// // console.log(jsonData.name);

// const objData = JSON.parse(jsonData);
// fs.readFile("testjson.json", "utf-8", (err,data) => {
//     //This will show the result in JSON
//     // console.log(data);

//     //This will show the result in JS obj
//     const objData = JSON.parse(jsonData);
//     console.log(objData);
// })

// console.log(objData.age);


//Lecture 15 - Create Simple API in Node.js

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) => {
    
//     const data = fs.readFileSync("testjson.json", "utf-8");
//     const objData = JSON.parse(data);
    
//     // console.log(req.url);
//     if(req.url == "/"){
//         res.end("This is your Home page");
//     } 
//     else if(req.url == "/about"){
//         res.end("This is your About page");
//     }
//     else if(req.url == "/contact"){
//         res.end("This is Contact page");
//     }
//     else if(req.url=="/userapi") {
//         fs.readFile("testjson.json","utf-8", (err,data) =>{
//             //To read data from the testjson.json
//             //console.log(data); //This will display the result in the terminal
//             //res.end(data); // This will display the result on the client's screen
//             // const objData = JSON.parse(data);
//             res.writeHead(200, {"content-type" : "application/json"})
//             res.end(objData[0].username);
//         })
//     }
//     else{
//         res.writeHead(404, {"content-type": "text/html"});
//         res.end("<h1>Error 404 page not found<h1>");
//     }

// }) ;

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening on port 8000");
// })

//Lecture 16 - Event modules in Node.js

// const EventEmitter =require("events");

// const event = new EventEmitter();

// event.on("sayMyName", ()=>{
//     console.log("Walter White");
// })

// event.emit("sayMyName");

// event.once("paramsfunc", (name,age) => {
//     console.log(`My name is ${name} and I am ${age} years old`);
// })

// event.emit("paramsfunc", "Halime",22)


// Lecture 17 - Streaming in Node.js

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     // fs.readFile("input.txt", "utf-8",(err, data) => {
//     //     if(err) return console.error(err);
//     //     res.end(data.toString());
//     // })

//     const readableStream =fs.createReadStream("input.txt");
//     readableStream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });

//     readableStream.on("end", () => {
//         res.end();
//     })

//     readableStream.on("error", () => {
//         console.log(error);
//         res.end("File not found");
//     })
// });

// server.listen(8000, "127.0.0.1");


//Lecture 18 - Stream pipes in node.js

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // performing the same streaming of data but now with the help of pipe()
    const readableStream = fs.createReadStream("imput.txt");
    readableStream.pipe(res);
    
});

server.listen(8000, "127.0.0.1");

