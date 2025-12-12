import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
   const Logout=()=>{
      localStorage.removeItem("token")
      window.location.href="/login"
  }
  return (
    <div class="sweet">
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    {/* <h4 class="navbar-brand" href="#">sweet</h4> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="sweets collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  class="nav-link active"  to="/sweet"><i>Sweets</i></Link>
          {/* <Link class="nav-link active  "  to=" /gulab">Gulab jamun</Link> */}
        </li>
        <li class="nav-item">
         <Link class="nav-link active  "  to="/gulab"><i>Gulab jamun</i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  to="/katli"><i>Kaju katli</i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  to="/rasamalai"><i>Rasmalai</i></Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/barfi"><i>Barfi</i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  to="/halwa"><i>halwa</i></Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/jelabi"><i>Jalebi</i></Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link active" to="/upload"> Upload</Link>
        </li> 
         <li class="nav-item">
          <Link class="nav-link active" to="/register">Register</Link>
        </li> 
        {/* <li class="nav-item">
          <Link class="nav-link active" to="/login">Login</Link>
        </li>  */}
         <div class="nav-link active login" onClick={Logout} >logout</div>
         <li class="nav-item">
          <Link class="nav-link active" to="/form"><i>Form</i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/singlepagecrud"><i>1page</i></Link>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <Link class="btn btn-outline-dark " to="/register" type="submit">register</Link>
       <Link class="btn btn-outline-dark " to="/login" type="submit">login</Link>
        <Link class="btn btn-outline-dark " to="/cart" type="submit">cart</Link>
        
      </form>
    </div>
  </div>
</nav>
        
   {/* <br/> <br/>  */}
    </div>
    
  )
}

export default Navbar