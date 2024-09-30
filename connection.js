const mongoose = require("mongoose");
//Write missing code here for database connection
const connection="mongodb+srv://sonusajujohn:haidasonu@cluster0.qwql7.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connection).then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY");
}).catch(()=>{
    console.log("DATABASE NOT CONNECTED SUCCESSFULLY");

});