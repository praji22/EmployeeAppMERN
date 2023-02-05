import React from 'react'

const NavbarHome = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
                   <div class="container-fluid">
                    <a class="navbar-brand" href="/"><h4>Employee Portal</h4></a>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                     <ul class="navbar-nav ms-auto">
                     <li class="nav-item"><a class="nav-link active" aria-current="page" href="/signin">LOGIN</a></li>
                     <li class="nav-item"><a class="nav-link" href="/signup">SIGNUP</a></li>
                     </ul>
                    </div>
                   </div>
                </nav>
    </div>
  )
}

export default NavbarHome