const express=require("express");
const database=require("./database/database.js");
const axios=require("axios");

const port=process.env.PORT || 8000;
const app=express();


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from module 1 a");
})

app.get("/msg2",(req,res)=>{
    res.json({
        msg:"hello form module1 msg"
    })
})
app.get("/msg",(req,res)=>{
    axios.get("http://container2:9000/msg1").then((response)=>{
        res.send(response.data);
    });
})

app.listen(port,(error)=>{
    if(error){
        console.log("Error occured in starting server ",error);
    }
    console.log("Server started at port number: ",port);
});

// this is to test for the server to test if running or not
module.exports=app;