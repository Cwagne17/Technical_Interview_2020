const{createCategory,getCategories} = require("../MockDB/categories");
const express = require("express");
const router  = express.Router();

router.get("/", function(req,res){
    res.send(getCategories());
});


router.post("/:category", function(req,res){
    res.send(createCategory(req.params.body));
});