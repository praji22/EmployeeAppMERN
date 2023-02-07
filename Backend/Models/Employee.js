const Mongoose = require('mongoose')
const employeeSchema = Mongoose.Schema(
    {
        name:String,
        location:String,
        position:String,
        salary:Number,
        email:String,
        password:String
    }
);
var employeeModel = Mongoose.model("employees",employeeSchema);
module.exports = employeeModel;