const Mongoose = require('mongoose')
const employeeSchema = Mongoose.Schema(
    {
       name:{type:String,required:true},
       location:{type:String,required:true},
       position:{type:String,required:true},
       salary:{type:Number,required:true}
    }
);
var employeeModel = Mongoose.model("employees",employeeSchema);
module.exports = employeeModel;