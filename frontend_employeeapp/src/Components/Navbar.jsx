import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar navbar-expand-lg navbar-custom dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Employee Portal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/viewemployees">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employeeform">Add Employee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employeeform">Signout</a>
        </li>
       </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar