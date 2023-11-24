const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// creating schema for authentication
const contactSchema = new mongoose.Schema({
    name:{
      type:String,required:true
      },
    email:{
      type:String,required:true , unique:true
      },
    password:{
      type:String,required:true
      },
    image:{
      type:String
    },
    message:{
      type:String
      }
          });
  

  
  //hashing
  contactSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
      }
      next();
    });
  
  //making model
  const signup = new mongoose.model("Signup", contactSchema);

  
  module.exports = signup;