var User=require("../model/models");

//create and save nw user
exports.create=(req,res)=>{
    
    if(!req.body){
        res.status(400).send({message: "Empty fields"});
        return;
    }

    //fetching data from form
    const user=new User({
        uname:req.body.name,
        uemail:req.body.email
    });

    //storing data
    console.log(req);

    user.save(user).then(data=>{
        // res.send(data)
        // alert("User added");
        res.redirect("/")
        
    }).catch(error=>{
        res.status(500).send({message: error.message || "Some error occured "});
    });

}

exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        User.findById(id).then(data=>{
            if(!data){
                res.status(404).send({message: `Not fount user with id :${id}`});
            }else
            {
                res.send(data);
            }
        }).catch(error=>{
            res.status(500).send({message: "Error retrieving data "});
        })
    }else{
        User.find().then(user=>{
            res.send(user)
        }).catch(error=>{
            res.status(500).send({message:error.message || "cannot load data "})
        });
    }
    
}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Empty fields"});
        return;
    }

    const id=req.params.id;
    console.log(id);
    console.log(req.body);
    User.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message : `Cannot update user info with id : ${id}`});
       }else
       {
            res.status(200).send({message:"Data Updated Successfully"});
       }
    }).catch(error=>{
        res.status(500).send({message : error.message || "some error"});
    });

}

exports.delete=(req,res)=>{
    const id=req.params.id;
    
    User.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message : `Cannot deleteuser info with id : ${id}`});
       }else
       {
            res.status(200).send({message:"Data deleted Successfully"});
       }
    }).catch(error=>{
        res.status(500).send({message : error.message || "some error"});
    });        
}
