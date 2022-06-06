//jshinit esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) { // request, response
    var today = new Date();
    var currentDate = today.getDay();
    
    if(currentDate === 6 || currentDate === 0) {
        res.write("<h1>Yay It's teh weekend!</h1>");
    } else {
        //res.write("<p>It is not the weekend.</p>"); // write on the page
        //res.write("<h1>Boo! I have to work!</h1>");
        res.sendFile(__dirname + "/index.html"); // call file(__dirname: directory name)
    }
    //res.send(); // send written text
});

app.listen(3000,function() {
    console.log("Server started on port 3000");
});

