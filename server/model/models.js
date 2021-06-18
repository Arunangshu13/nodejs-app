const mongoose=require("mongoose");
var schema=new mongoose.Schema({
        uname: {
            type:String, 
            required:true
        },
        uemail: {
            type:String, 
            required:true,
            unique:true
        }
});

const User=mongoose.model('user', schema);
module.exports=User;