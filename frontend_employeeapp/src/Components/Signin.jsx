import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarHome from './NavbarHome';

const Signin = () => {
    let Navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const checkSignin=()=>{
      const userData={
          "email":email,
          "password":password

      }
      console.log(userData);
      axios.post('http://localhost:3001/signin',userData)
      .then((response)=>{
          console.log(response.data)
          let position=response.data.data[0].position;
          console.log(position);
          if(response.data.status==="success" || position==="Admin"){
               console.log("Admin")
               alert("Login Successfully");
              Navigate("/viewemployees")
          }
          else{alert("Invalid data")
            }
        })
      }
      

    
    //  const inputHandler =(event)=>{
    //     const{name,value}=event.target
    //     setData(
    //         (previousState)=>(
    //             {...previousState,[name]:value})
    //     )
    //   }
    //   const signinValues =()=>{
    //     console.log(data)
    //     axios.post("http://localhost:3001/signin",data)
    //     .then(
    //       (response)=>{
    //         console.log(response.data)
    //         let position=response.data.data[0].position;
    //         console.log(position)
    //         if (response.data.status==="success" || position==="Admin") {
    //           console.log(Admin)
              
    //          }
            
    //       }
    //     )
    //     .catch(
    //       (error)=>{
    //         console.log(error)
    //       }
    //     )
    // }


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
                onChange={(e)=>setEmail(e.target.value)}
                // value={data.email}
                name='email'/><br/>
                <label htmlFor="" className="form-label">Password</label><br/>
                <input type="text" 
                className="form-control w-75" 
                placeholder='Enter Password'
                onChange={(e)=>setPassword(e.target.value)}
                // value={data.password}
                name='password'/><br/>
                <button className="btn btn-info" onClick={checkSignin}>Login</button>
                </section>
            </div>
        </div>
        </div>
        );
}

export default Signin