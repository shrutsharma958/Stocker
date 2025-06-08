import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    return (
       
        <div className='fixed-top'>

            <nav class="navbar navbar-expand-lg navbar-light p-3 border-bottom container-fluid d-flex justify-content-around " style={{backgroundColor:"white"}}>
            <Link to="/">
    <img src="\media\stockercom-high-resolution-logo-transparent (1).png"  className='ps-5' alt=""  style={{width:"30%"}} />
    </Link>
        <div>
            <br />
        </div>
        <div>
            <br />
        </div>
        <div>
            <br />
        </div>
  
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item active ">
        <Link class="nav-link active ps-5 text-muted" to='/signup'>Signup <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active ps-5 text-muted" to='/about'>About</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link active ps-5 text-muted"  to='/product'>Product <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active ps-5 text-muted" to="/pricing">Pricing</Link>
      </li>
      
       <li class="nav-item">
        <Link class="nav-link active ps-5 text-muted" to="support">Support</Link>
      </li>
      <li className='mt-2'>
        <span> 
            
        </span>
        <i class="fa-solid fa-bars ps-5 text-muted"></i>
      </li>
     
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
     
    </form>
  
</nav>
        </div>
    );
}

export default Navbar;