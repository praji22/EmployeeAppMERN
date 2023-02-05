import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarHome from './NavbarHome';

const Signin = () => {
    let Navigate=useNavigate();
    const [data,setData] = useState(
        {
            email:"",
            password:""
        }
      )
    
      const inputHandler =(event)=>{
        const{name,value}=event.target
        setData(
            (previousState)=>(
                {...previousState,[name]:value})
        )
      }
      const signinValues =()=>{
        console.log(data)
        axios.post("http://localhost:3001/signin",data)
        .then(
          (response)=>{
            console.log(response.data.data.length)
            if (response.data.data.length === 1) {
              let empname=response.data.data[0].name;
              alert("Login Successfully");
              sessionStorage.setItem("name",empname);
              Navigate("/viewuser")
            }
            else{alert("Invalid data")
            }
          }
        )
        .catch(
          (error)=>{
            console.log(error)
          }
        )
    }


  return (
    <div className="container">
        <NavbarHome/>
    <div className="row wrapper g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 lefthome">
                <section>
                <h4>Welcome to Your Portal</h4>
                <p>Not have an account?<br/>
                 Please <a href="/signup" className='smlink'>Signup</a></p> 
                </section>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 righthome">
                <section>
                <label htmlFor="" className="form-label">E-mail</label><br/>
                <input type="text" 
                className="form-control w-75" 
                placeholder='Enter Your email'
                onChange={inputHandler}
                value={data.email}
                name='email'/><br/>
                <label htmlFor="" className="form-label">Password</label><br/>
                <input type="text" 
                className="form-control w-75" 
                placeholder='Enter Password'
                onChange={inputHandler}
                value={data.password}
                name='password'/><br/>
                <button className="btn btn-info" onClick={signinValues}>Login</button>
                </section>
            </div>
        </div>
        </div>
        );
}

export default Signin