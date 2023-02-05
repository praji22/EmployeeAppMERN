import React, { useState } from 'react'
import Navbar from './Navbar'

const Employeeform = () => {
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

    const readvalues =()=>{
        console.log(data)
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
                    <button className="btn btn-info" onClick={readvalues}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Employeeform