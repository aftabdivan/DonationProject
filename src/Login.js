import React, { createContext, useContext, useState } from "react";
import "./index.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import db2 from "./FireBase";
import {collection,getDocs,query,where} from "firebase/firestore";

const Login = () => {
  
  const redirect = useNavigate();
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 

  const postData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });

  };

  const login = async(event) => {
    event.preventDefault();
    console.log(data)

    const { email, password } = data;

    //for auth 
    const checkQuery=query(
      collection(db2,"SignUp"),
      where("Email","==",email),
      where("Password","==",password)
    );

    const docsSnap=await getDocs(checkQuery);
   
    
    if(docsSnap?.docs.length>0)
    {

      console.log("login")
      redirect("/")
      setData({
        email:"",
        password:""
      })

      swal("Sign Up SuccessFull!") 
         swal({
          title: "Good job!",
          text: "Welcome in Divan's Pay!",
          icon: "success",
          button: "Let's Go!",
        });
    }
    else{

      //redirect("/Login_Main")
      
      swal("please check all the field") 
       swal({
        title: "You Mistaked!",
        text: "You need to check the field!",
        icon: "warning",
        button: "Let's try!",
      });
      console.log("fail");
      setData({
        email:"",
        password:""
      })
    }
    
    //auth end with Realtime Database Firestore

        /* const res = fetch(
        "https://website-737c6-default-rtdb.firebaseio.com/loginData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      ); */
      // if (res) {
      //   setData({
      //     email: "",
      //     password: "",
      //   });
      
     
      

    //Toggle Login Button
    var elem = document.getElementById("mybtn");
      if(elem.innerText==="Log In"){
        elem.innerText="Log Out";
        elem.innerText="Log Out"
      }
      else{
        elem.innerText="Log In";
        
      } 
  };

  return (
    <>
      <div className="Login_div">
        <h1 className="logon_h1">Login</h1>
        <br />
        <br />
        <label className="login_label fw-bold">Enter Your Mail</label>
        <input
          className="main-hero-para w-50"
          type="email"
          name="email"
          placeholder="  Enter E-mail"
          value={data.email}
          onChange={postData}
        />
        {/* <label className="login_label fw-bold">Enter Your Password</label> */}
        <input
          className="main-hero-para w-50"
          type="password"
          name="password"
          placeholder="  Enter Password"
          value={data.password}
          onChange={postData}
        />

        <button className="btn btn-style w-0" onClick={login}>
          Login
        </button>
      </div>
    </>
  );
};
export default Login;
