import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

const Employeeform = () => {
    let Navigate=useNavigate();
    const [data,setData] = useState(
        {
            name:"",
            position:"",
            location:"",
            salary:0
        }
    )
    
    const inputHandler =(event)=>{
        const{name,value}=event.target
        setData(
            (previousState)=>(
                {...previousState,[name]:value})
        )
    }

    const addformvalues =()=>{
        console.log(data)
        axios.post("http://localhost:3001/addemployee",data)
        .then((response)=>{
            console.log(response.data)
            if(response.data.status==="Success"){
                alert("Employee added successfully")
                setData(
                    {
                        name:"",
                        position:"",
                        location:"",
                        salary:0
                   }
                )
            }
            else{
                alert("Error occured")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        Navigate("/viewemployees")
    }


  return (
    <div className="container ">
    <Navbar/>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 formwrapper">
                <h5>Add Employee Details</h5>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text"
                     className="form-control w-75" 
                     placeholder='Enter Name'
                     onChange={inputHandler}
                     value={data.name}
                     name='name'/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Position</label>
                    <input type="text" 
                    className="form-control w-75" 
                    placeholder='Enter Designation'
                    onChange={inputHandler}
                     value={data.position}
                     name='position'/>   
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" 
                    className="form-control w-75" 
                    placeholder='Enter Location'
                    onChange={inputHandler}
                     value={data.location}
                     name='location'/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Salary</label>
                    <input type="text" 
                    className="form-control w-75" 
                    placeholder='Enter Salary'
                    onChange={inputHandler}
                     value={data.salary}
                     name='salary'/>
                </div>
             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info" onClick={addformvalues}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Employeeform