const express  = require("express");

//Mongo isn't working, Custom DB will be in src
//const mongoose = require("mongoose");

//Connect to mongoDb
//mongoose.connect("mongodb://localhost/tester");

/*mongoose.connection.once("open", function(){
    console.log("Connected To DB.");
}).on("error", function(){
    console.log("Connection error", error);
});*/

const index = express();
const{createCategory,getCategories} = require("./MockDB/categories");

//const categoryRouter = require('./routers/categoryRouter');
//index.use("/category", categoryRouter);

router.get("/", function(req,res){
    res.send(getCategories());
});

//Practice  
index.get('/', function(req, res) {
    res.send("WE are on home");
});

index.get('/posts', function(req, res) {
    res.send("WE are on posts");
});



index.listen(3000);