const express = require("express");

const app = express();
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const blogModel=require('../CodingChallenge_Blog/model');
require('./connection')

//Write missing code here and all the CRUD operations on the database

// Get operation
app.get('/',async (req,res)=>{
  try {
    const data=await blogModel.find();
    res.status(200).send(data);
  } 
  catch (error) {
    res.status(404).send(data);
  }
})

// POST OPERATION

app.post('/addblog',async (req,res)=>{
    try {
        var item=req.body;  
        const data1=new blogModel(item);     
        const savedata=await data1.save();     
        res.status(200).send("DATA SAVED SUCCESSFULLY");
    } catch (error) {
        res.status(404).send("POSTING OF DATA UNSUCCESSFULL");
    }
})

// UPDATE OR PUT OPERATION

app.put('/update/:id',async (req,res)=>{
    try {
        const id=req.params.id;      
        const data=await blogModel.findByIdAndUpdate(id,req.body);  
        res.status(200).send("UPDATION SUCCESSFULLY DONE");
    } catch (error) {
        res.status(404).send("UNSUCCESSFUL UPDATION - FAILURE");
    }
})

// DELETE OPERATION

app.delete('/delete/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const data=await blogModel.findByIdAndDelete(id);
        res.status(200).send("DELETION SUCCESSFULLY DONE")    
    } catch (error) {
        res.status(404).send("DELETION UNSUCCESSFUL");
    }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
