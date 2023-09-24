const router=require("express").Router();
const User=require('../Models/User');
const bcrypt=require("bcrypt");


//REGISTER
router.post("/register",async (req,res)=>{
    try{
        const saltRounds=10
        const salt=await bcrypt.genSalt(saltRounds);//Creating a salt(a string added to the password and hashed => resulting in a more secure hashed password)
        const hashedPass=await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        });

        const user=await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);// 500-> Some error is present with mongodb or express server
    }
})


//LOGIN
router.get("/login",async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username})
        console.log(user)
        if(!user){
            return res.status(400).json("Wrong Credentials 1!");
        }
        const validated=await bcrypt.compare(req.body.password,user.password);
        console.log(validated);
        if(!validated){
            return res.status(400).json("Wrong Credentials!");
        }
        const {password, ...others}=user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports=router