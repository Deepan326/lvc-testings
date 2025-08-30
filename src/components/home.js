import React, { useEffect, useRef,useState } from "react";
import CarouselComponent from "./carsouel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Industries from "./industriesWeServe.js"
import Footer from "./footer.js";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/lvc-icon.jpg";
import SpotLogo from "../assets/lvcSpo.jpg";
import AcaLogo from "../assets/lvcAca.jpg";


const Home = () => {

  const navigate = useNavigate();
      
  const handleNavigation = (path) => {
          navigate(path);
          window.scrollTo(0, 0);
      };

  const [showAllServices, setShowAllServices] = useState(false);
  
    const toggleServices = () => {
      setShowAllServices((prev) => !prev); 
    };
  
    const images = [
      { src: "https://images.pexels.com/photos/34577/pexels-photo.jpg", alt: "E-commerce Development", title: "E-commerce Development" },
      { src: "https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Growth", title: "Website Growth" },
      { src: "https://images.pexels.com/photos/8867247/pexels-photo-8867247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Maintenance and Support", title: "Website Maintenance and Support" },
      { src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Design", title: "Website Design" },
      { src: "https://images.pexels.com/photos/8247921/pexels-photo-8247921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Cybersecurity", title: "Cybersecurity" },
      { src: "https://media.istockphoto.com/id/532187422/photo/cloud-uploading-from-mobile-phone-for-file-sharing-and-collaboration.jpg?b=1&s=612x612&w=0&k=20&c=yQsLHA-8AmPjbNcwanBAxMKosyt7e4D1rJPEvMvaShg=", alt: "Cloud", title: "Cloud" },
      { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Consulting", title: "Consulting" },
      { src: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Data & Analytics", title: "Data & Analytics" },
      { src: "https://images.pexels.com/photos/16629368/pexels-photo-16629368/free-photo-of-webpage-of-chatgpt-a-prototype-ai-chatbot-is-seen-on-the-website-of-openai-on-a-smartphone-examples-capabilities-and-limitations-are-shown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Artificial Intelligence", title: "Artificial Intelligence" },

    ];

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-out");
          } else {
            entry.target.classList.remove("fade-out");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);
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
      <div className="row services-section-home">
      <div style={{backgroundColor:"white",}}className="container py-5">
        <h1  style={{color:"black",}}className="services-herotitle">Services We Offer</h1>
        <div className="row">
          {/* Show first 6 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2 >{img.title}</h2>
              </div>
            </div>
          ))}

          {/* Show additional images only if `showAllServices` is true */}
          {showAllServices &&
            images.slice(6).map((img, index) => (
              <div key={index} className="col-md-4 position-relative image-container">
                <img className="w-100 custom-image" src={img.src} alt={img.alt} />
                <div className="overlay-text">
                  <h2>{img.title}</h2>
                </div>
              </div>
            ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <button className="view-more-btn" onClick={toggleServices}>
            {showAllServices ? "Show Less" : "View More "}
          </button> 
        </div>
      </div>
      </div>
 
      
      <div className="container py-5 section-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-section" ref={textRef}>
            <h2 className="mb-4 section-4-heading">What We Offer</h2>
            <h3>Design Development</h3>
            <p>
              Whether you're a start-up aiming to establish your digital
              presence or a growing enterprise seeking to elevate your brand,
              we’re here to support your journey. You’ve found a partner
              dedicated to your success, with the expertise to deliver real
              results.
            </p>
            <p>
              Over the past 5 years, we’ve worked with countless clients,
              helping them achieve measurable growth and lasting impact.
            </p>
            <p>
              <strong>
                Results, innovation, and growth are what we strive to bring to
                every project.
              </strong>
            </p>
          </div>

          <div className="col-md-6 image-section" ref={imageRef}>
            <img
              className="d-block w-100 custom-carousel-image"
              src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="What We Offer"
            />
          </div>
        </div>
      </div>
<div>
<Industries/>
</div>
<div className="section-5">
     <h1 style={{textAlign:"start",color:"white"}}>Transform your Goals in to reality </h1>
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
<div className="footer-section">
        <div className="footer-section-flex">
          <div>
            <h2>Transformation starts here</h2>
            <br></br>
            <p>At LVC Solutions, transformation starts where vision meets action. We’re not just a software company—we’re your dedicated partner in reimagining what's possible.<br />
             Rooted in innovation and driven by real-world results, we empower businesses to cross the digital frontier with confidence and agility.<br />
             Let's build tomorrow—starting now.</p>
            <button 
            className="Connect-button"
            onClick={() => {
              handleNavigation("/contact");
            }}
            >Connect With Us</button>
          </div>
          <div className="divider"></div>
          <div className="footer-section-flex-column">
            <p>FIND OUT MORE</p>
            <button className="Connect-button-service"
            onClick={() => {
              handleNavigation("/services");
            }}
            >Our Services</button>
            <button className="Connect-button-contact "
            onClick={() => {
              handleNavigation("/contact");
            }}
            >Contact Us</button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>

  

    
  );
};

export default Home;
