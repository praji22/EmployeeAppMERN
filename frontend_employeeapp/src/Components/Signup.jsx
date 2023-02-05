import axios from 'axios'
import React, { useState } from 'react'
import NavbarHome from './NavbarHome'

const Signup = () => {
  const [data,setData] = useState(
    {
        name:"",
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

  const signupValues =()=>{
    console.log(data)
    axios.post("http://localhost:3001/signup",data)
    .then(
      (response)=>{
        console.log(response.data)
        if(response.data.status==="Success"){
          alert("User Registered Successfully")
          setData(
            {
              name:"",
              email:"",
              password:""
            })
        }
        else{alert("error occured")
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
                <h4>SignUp to Your Portal</h4>
                <p>Already have an account?<br/>
                 Please <a href="/signin" className='smlink'>Login</a></p> 
                </section>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 righthome">
                <section>
                <label htmlFor="" className="form-label">Name</label><br/>
                <input type="text" 
                className="form-control w-75" 
                placeholder='Enter Your Name'
                onChange={inputHandler}
                value={data.name}
                name='name'/><br/>
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
                <button className="btn btn-info" onClick={signupValues}>Signup</button>
                </section>
            </div>
        </div>
        </div>
  )
}

export default Signup