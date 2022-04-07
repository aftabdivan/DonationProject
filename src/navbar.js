import React, { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import { UserContext } from "./App";


const Navbar = () => {
  const [show, setShow] = useState(false);
  
  //For Toggle Button

  /* const{state,dispatch}=useContext(UserContext);

  const RanderMenu=()=>{
    if(state)
    {
      var elem=document.getElementById("mybtn")
       elem.innerText("Log Out")
    }
    else{
      var elem=document.getElementById("mybtn")
       elem.innerText("Log In")
    }
  } */

  /* Login Page */
  const login = () => {
    redirect("/Login_Main");

    //dispatch({type:"USER",payload:false})

  };

  /* Sign Up Page */
  const sign = () => {
    redirect("/Sign_Up");
  };
  const redirect = useNavigate();

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Divan's Pay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button
                  className="btn btn-style"
                  type="submit"
                  value="login"
                  id="mybtn"
                  onClick={login}
                >
                  Log In 
                 
                </button>
                <button
                  className="btn btn-style btn-style-border"
                  onClick={sign}
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
