import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Userdashboard = () => {
  var [employeeList,setEmployee]=useState([]);

  useEffect(
        ()=>{
            getdata();
        },[]
    )

    const getdata = ()=>{
      axios.get("http://localhost:3001/viewuser")
      .then(
          (response)=>{
              console.log(response.data)
              setEmployee(response.data)
           }
      )
      .catch(
          (error)=>{
              console.log("error occured"+error)
          }
      )
  }
  return (
    <div className="container">
    <Navbar/>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-primary table-striped">
                    <thead>
                     <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope='col'>Position</th>
                        </tr>
                    </thead>
                     <tbody>
                     {employeeList.map((value,index)=>{
                        return <tr>
                        <th scope="row">{value.id}</th>
                        <td>{value.name}</td>
                        <td>{value.location}</td>
                        <td>{value.position}</td>
                        </tr>
                         })}
                     </tbody>
                     </table>
                    </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Userdashboard