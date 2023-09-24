const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const authRoutes=require("./Routes/Auth")
const userRoutes=require("./Routes/Users")
const postRoutes=require("./Routes/Posts")
const categoryRoutes=require("./Routes/Categories")
const multer=require("multer")


dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, 
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000 }})
.then(console.log("Connected to MongoDB"))
.catch((err)=>(console.log(err))) 


//Upload images
const storage=multer.diskStorage({
    destination:(req,file,cb)=>
    {
        cb(null,"Images")
    },
    filename: (req,file,cb)=>{
        cb(null,"SS.jpeg");
    },
})

const upload=multer({storage:storage})
app.post("/API/Upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
}
)


//Routes
app.use("/API/Auth",authRoutes);
app.use("/API/Users",userRoutes);
app.use("/API/Posts",postRoutes);
app.use("/API/Categories",categoryRoutes)


//Server running on port 5000
app.listen("5000",()=>{
    console.log("BackEnd is running!");
})