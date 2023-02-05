import React from 'react'
import './Empstyle.css'; 
import NavbarHome from './NavbarHome';
const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {/* Navigation */}
                <NavbarHome/>
            </div>
        </div>
       <div className="row">
       <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <img src={require('../images/banner_home.jpg')} alt="Employeeapp" className='imgh' />
            </div>
       </div>
    </div>
  )
}

export default Home