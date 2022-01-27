import React,{useContext}  from "react";
import { Link } from 'react-router-dom';

import '../Navigation/Header.css';
import { AuthContext } from '../../context/auth-context';
import Button from "../FormElements/Button";


const Header = ()=>{
  const auth = useContext(AuthContext);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/" style={{color:"black"}}>Automobile Mart</Link>
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav  mt-2 mt-lg-0" >
      <li className="nav-item">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/cart">Cart </Link>
      </li>
      { auth.isLoggedInAsAdmin && <><li className="nav-item">
      <Link className="nav-link" to="/admin/addadmin">Add Admin </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/admin/users">User</Link>
      </li>
      </>}
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/login">Login</Link>
          
         { auth.isLoggedIn && <><button onClick={function(){auth.isLoggedInAsAdmin == true ? auth.adminLogout():auth.logout()}} className="dropdown-item" to="/logout">Logout</button><Link className="dropdown-item" to="/useredit/1">Edit User</Link></>}
          
        </div>
        </li>
    </ul>
   
  </div>
</nav>
    );
}

export default Header;