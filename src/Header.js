import React, { useState } from "react";
import db2 from "./FireBase";
import { addDoc,collection } from "firebase/firestore";
import Swal from "sweetalert2";

const Header = () => {

  //For storing data in states

  const [rEmail, setEmail] = useState({
    email: "",
  });

  const database=collection(db2,"Query Mails")

  const {email}=rEmail;
  const getIt = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setEmail({ ...setEmail, [name]: value });
    console.log(rEmail);
  };


  //Check for field is empty or filled
  const submitData=async()=>{

    /* await addDoc(database,{
      RecievedEmail:rEmail
    }) */

    if(email=="")
    {

       const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Some Problem in Mail'
      })
      //alert("sorry")
    }
    else{
      await addDoc(database,{
        RecievedEmail:rEmail
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Mail Sended successfully'
      })
     // alert("email received")
      setEmail({
        email:""
      })
    }
    
  }


  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                  type="email"
                  onChange={getIt}
                  value={rEmail.email}
                  name="email"
                />
                <button type="submit" onClick={submitData} className="input-group-button">
                  Get it now
                </button>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
