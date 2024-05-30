const mongoose = require("mongoose");


const connectToDB = () =>{
    mongoose.connect("mongodb+srv://avessolanki043:gEBJaWlIufPaII8V@cluster0.dxvbo5s.mongodb.net/",{
        useUnifiedTopology:true
    }).then(console.log("connected successfully")).catch((e)=>{console.log("Something went wrong in DB connection ", e)});
}

module.exports = connectToDB;