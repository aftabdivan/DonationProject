import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import db2 from './FireBase';
import { addDoc,collection } from "firebase/firestore";

const Sign = () => {
  const redirect = useNavigate();

  const [data, setData] = useState({
    number: "",
    email: "",
    password: "",
    setPassword: "",
  });

  const database=collection(db2,"SignUp")

  const postData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const sign = async(event) => {
    event.preventDefault();
    const { number, email, password, setPassword } = data;
   
    /* await addDoc(database,{
      Number:number,
     Email:email,
     Password:password,
     SetPassword:setPassword 
    }) */

    if (number && email && password && setPassword) {

      
      await addDoc(database,{
        Number:number,
        Email:email,
        Password:password,
        SetPassword:setPassword 
      })
      
      redirect("/Login_Main");
     
      const res = fetch(
        "https://website-737c6-default-rtdb.firebaseio.com/SignUp-Data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            number,
            email,
            password,
            setPassword,
          }),
        }
      );
      if (res) {
        setData({
          number: "",
          email: "",
          password: "",
          setPassword: "",
        });
        /* swal("Sign Up SuccessFull!") */
        swal({
          title: "Good job!",
          text: "Now you can login with your creadeantials!",
          icon: "success",
          button: "Let's Go!",
        });
      }
    } else {
      /* swal("please fill all the field") */
      swal({
        title: "You Mistaked!",
        text: "You need to fill all the field!",
        icon: "warning",
        button: "Let's try!",
      });
    }
  };

  return (
    <>
      <div className="Login_div">
        <h1 className="logon_h1">Sign Up</h1>
        <br />
        <br />
        {/* <label className="login_label fw-bold">Enter Your Mobile Number</label> */}
        <input
          className="main-hero-para w-50"
          placeholder="  Enter Your Mobile Number"
          type="number"
          name="number"
          value={data.number}
          onChange={postData}
        />
        {/* <label className="login_label fw-bold">Enter Your Mail</label> */}
        <input
          className="main-hero-para w-50"
          placeholder="  Enter Your E-mail"
          type="email"
          name="email"
          value={data.email}
          onChange={postData}
          required
        />
        {/* <label className="login_label fw-bold">Enter Your Password</label> */}
        <input
          className="main-hero-para w-50"
          placeholder="  Enter Your Password"
          type="password"
          name="password"
          value={data.password}
          onChange={postData}
        />
        {/* <label className="login_label fw-bold">Re-enter Your Password</label> */}
        <input
          className="main-hero-para w-50"
          placeholder="  Re-enter Your Password"
          type="password"
          name="setPassword"
          value={data.setPassword}
          onChange={postData}
        />
        <button className="btn btn-style w-0" onClick={sign}>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default Sign;
