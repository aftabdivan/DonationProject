import React, { createContext, useReducer } from "react";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Error from "./Pages/Error";
import Login_Main from "./Pages/Login_Main";
import Sign_Up from "./Pages/Sign_Up";
//import Navbar from "./navbar";

/* import { initialState,reducer } from "./reducer/UseReducer";
export const UserContext=createContext();
 */

/* const Routing=()=>{
  return(
    <>
  <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/Login_Main" element={<Login_Main />}></Route>
        <Route path="/Sign_Up" element={<Sign_Up />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  )
} */

const App = () => {

  //const[state,dispatch]=useReducer(reducer,initialState)
  
  return (
    <>
    {/* <UserContext.Provider value={{state,dispatch}}> */}
       <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/Login_Main" element={<Login_Main />}></Route>
        <Route path="/Sign_Up" element={<Sign_Up />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes> 

      {/* <Routing/> */}
      {/* <Navbar/> */}

    {/*</></UserContext.Provider>*/}
    </>
  );
};

export default App;
