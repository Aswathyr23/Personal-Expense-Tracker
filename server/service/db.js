const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/expenseapp");

const user = mongoose.model("user", {
    Name:String,
    Email:String,
    Mobile_No:String,
    Password:String
  });

  const expense = mongoose.model("expense", {
    Title:String,
    Description:String,
    Amount:Number,
    Date:Date,
    Email: String
 });

 const income = mongoose.model("income", {
    Title:String,
    Description:String,
    Amount:Number,
    Date:Date,
    Email: String 
 });

 module.exports = {
    user,expense,income
   };

