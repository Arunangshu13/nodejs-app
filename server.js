const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const path=require("path");
const controller=require("./server/controller/controller")
const connectDB=require("./server/database/connection")

const app=express();

dotenv.config({path : 'config.env'});
const PORT=process.env.PORT || 8080

//log requests
app.use(morgan("tiny"));
connectDB();

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");


//LOADING ALL STATIC FOLDER
app.use("/css", 
    express.static(
            path.resolve(__dirname, "static/css")
        )
    );

app.use("/imgs", 
    express.static(
            path.resolve(__dirname, "static/imgs")
        )
    );
    
app.use("/js", 
    express.static(
            path.resolve(__dirname, "static/js")
        )
    );


app.use('/',require("./server/routes/routers.js"))





app.listen(8000, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});