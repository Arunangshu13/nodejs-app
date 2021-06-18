const express=require("express");
const route=express.Router();
const controller=require("../controller/controller")
const services=require("../services/render");

route.get("/", services.homeRoute);


route.get("/addUser", services.addUserRoute);

route.get("/saveUser", services.saveUserRoute);


//API
route.post("/Users", controller.create);
route.put("/Users/:id", controller.update);
route.delete("/Users/:id", controller.delete);
route.get("/Users", controller.find);


module.exports=route;