import { useState } from "react";
import CarouselComponent from "./carsouel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import TransformationStartsHere from "./transformationStartsHere.js";
import Footer from "./footer.js";
import Logo from "../assets/lvc-icon.jpg";
import SpotLogo from "../assets/lvcSpo.jpg";
import AcaLogo from "../assets/lvcAca.jpg";

const Home = () => {

  return (
    <main style={{ padding: "20px",marginTop:"50px" }}>
      <div className="carsouelheight">
        <CarouselComponent />
      </div>
      <div className="section2">
        <h1>LVC ECOSYSTEM</h1>
        <div className="partner-logos-container">
          <div className="partner-logos">
            <img src={SpotLogo} alt="Partner Logo" className="partner-logo" />
            <img src={Logo} alt="Partner Logo" className="partner-logo" />
            <img src={AcaLogo} alt="Partner Logo" className="partner-logo" />
          </div>
        </div>
      </div>

      {/* Material Icons Section */}
      {/* <div className="logos-section">
      <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png" alt="Google Logo" className="company-logo" />
      <img src="https://static.vecteezy.com/system/resources/previews/021/514/726/non_2x/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="Microsoft Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="company-logo" />
      </div> */}

      <section style={{ backgroundColor:"white" }} className="py-5">
          <h1 style={{color:"black",}}>Section</h1>
      </section>
 
      {/* Empty Section */}
      <section className="container py-5 section-4">
        <h1 style={{color:"white"}}>Section</h1>
      </section>

      {/* Empty Section */}
      <section style={{ fontSize: "14px", color:"000", fontWeight:"500", background:"white" }} className="py-5">
        <h1 style={{color:"black"}}>Section</h1>
      </section>

      <div className="section-5">
        <h1 style={{ textAlign:"center", color:"white" }}>Transform your Goals into reality </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 position-relative image-container">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/7947968/pexels-photo-7947968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Identify goals</h2>
            </div>
          </div>
          <div className="col-md-4 position-relative image-container">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/7414305/pexels-photo-7414305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Design & Planning</h2>
            </div>
          </div>
          <div className="col-md-4 position-relative image-container">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Execution & Reveal</h2>
            </div>
          </div>
        </div>
      </div>
      <TransformationStartsHere/>
      <Footer/>
    </main>
  );
};

export default Home;