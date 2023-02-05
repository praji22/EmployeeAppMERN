const Express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')
const Mongoose = require('mongoose')
const bcrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

const employeeModel = require('./Models/Employee')
const userModel = require('./Models/Users')


let app = Express()

app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())
app.use(Cors())

Mongoose.connect("mongodb+srv://prajeesha:malavika@cluster0.ofqpaei.mongodb.net/employeeDb?retryWrites=true&w=majority",{useNewUrlParser:true})

// Signup
app.post('/signup',async(req,res)=>{
    let data = new userModel({name:req.body.name,
        email:req.body.email,
        password:bcrpt.hashSync(req.body.password,10)})
    console.log(data)
    await data.save(
        (error,data)=>{
            if (error) {
                res.json({"status":"Error","error":error}) 
            } else {
                res.json({"status":"Success","data":data})
            }
        }
    )
    res.json({"status":"Success","data":data})
})

// Admin Signin
app.post('/signin',async(req,res)=>{
    var email = req.body.email
    var password = req.body.password
    let result = userModel.find({email:email},(err,data)=>{
        if (data.length>0) {
            const passwordValidator = bcrpt.compareSync(password,data[0].password)
            if (passwordValidator) {
               res.json({"status":"success","data":data}) 
            } else {
                res.json("Invalid Password")
            }
        } else {
            res.json({"status":"failed","data":"Invalid email id"})
        }
    })
   
})

// User Signin
app.post('/signinuser',async(req,res)=>{
    var email = req.body.email
    var password = req.body.password
    let result = userModel.find({email:email},(err,data)=>{
        if (data.length>0) {
            const passwordValidator = bcrpt.compareSync(password,data[0].password)
            if (passwordValidator) {
               res.json({"status":"success","data":data}) 
            } else {
                res.json("Invalid Password")
            }
        } else {
            res.json({"status":"failed","data":"Invalid email id"})
        }
    })
})

// Add Employee
app.post('/addemployee',async(req,res)=>{
    let data = new employeeModel({name:req.body.name,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary,
        })
    console.log(data)
    await data.save()
    res.json({"status":"Success","data":data})
})

// viewemployees
app.get('/viewemployees',async(req,res)=>{
    try{
        var result = await employeeModel.find();
        res.send(result);
    }
    catch(error){
        res.status(500).send(error)
   }
 })

//  Update employees
app.put('/viewemployees',(req,res)=>{
    var name = req.body.name;
    var data = req.body;
    employeeModel.findOneAndUpdate(
        {"name": name},
        data,(err,data)=>{
            if (err) {
                res.json({"status":"error","error":err})
            } else {
                res.json({"status":"Updated Successfully","data":data})
            }
        }
    )
});

// delete employee
app.delete('/viewemployees/:id',(req,res)=>{
    var id = req.body.id;
    var data = req.body;
    employeeModel.findByIdAndDelete(id,(err,data)=>{
            if (err) {
                res.json({"status":"error","error":err})
            } else {
                res.json({"status":"data deleted","data":data})
            }
        }
    )
});

app.listen(3001,()=>{
    console.log("App running")
})