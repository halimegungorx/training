const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 8000;

// relativePath ../ /about
// AbsoultePath \

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// To set the view engine
app.set('view engine', "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index', {
        dynamic: "handlebars",
    });
});


app.get("/about", (req, res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=687b9e7fd6e6a5da6f42f61ad1092369`)
    .on("data",(chunk) => {
        const objData = JSON.parse(chunk);
        const arrData =[objData];
        console.log(`${arrData[0].name} city with temp ${arrData[0].main.temp}`)
    
        res.writeHead(`${arrData[0].name}`)
    })

    .on("data",(chunk) => {
      if(err) return console.log("Connection has closed due to some errors",err);
        res.end();
    })
    // // console.log(req.query.name);
    // res.render("about",{
    //     name: req.query.name,
    // });
});

app.get("/about/*", (req, res) => {
    res.render("404", {errorcomment: "In about this page not found (Error 404)",});
});

app.get("*", (req,res) => {
    res.render("404", {
        errorcomment: "Error 404. Page Not Found"
    })
})

app.listen(port, () => {
    console.log("Server is listening to port 8000");
});