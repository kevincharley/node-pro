var express=require('express')
const pr=express();
var bodyparser=require('body-parser')

pr.use(bodyparser.urlencoded({extended:true}))
pr.set("view engine","ejs");
pr.set("views","./src/view")
pr.listen(1111,function(res,req){
    console.log("server started")
})
pr.get("/",function(req,res){
    res.render("home")
})
pr.get("/new",function(req,res){
    
    res.render("new")
})
pr.get("/view",function(req,res){
    res.render("view")
})
pr.get("/remove",function(req,res){
res.render("remove")
})
pr.post("/details",function(req,res){
var name=req.body.pn
var price=req.body.pp
var quandity=req.body.pq

    res.render("details",{pdn:name,pdp:price,pdq:quandity})
})
