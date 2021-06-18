const axios=require("axios");


exports.homeRoute=(req,res)=>{
    axios.get("http://localhost:8000/Users")
        .then(function(response){
            // console.log(response);
            res.render("index", {users:response.data});        
        }).catch(error=>{
            res.send(error);
        });
}
exports.addUserRoute=(req,res)=>{
    res.render("addUser");
}
exports.saveUserRoute=(req,res)=>{
    axios.get("http://localhost:8000/Users", {params:{id:req.query.id}})
    .then(function(response){
        console.log(response.data);
        res.render("saveUser", {user:response.data});
    }).catch(error=>{
        res.send(error);
    })
}
