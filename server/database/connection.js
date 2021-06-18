const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log(`mongodb connected :${connection.connection.host}`)
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}
module.exports=connectDB;