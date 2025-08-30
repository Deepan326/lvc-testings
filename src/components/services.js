import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Industries from "./industriesWeServe.js";
import Footer from "./footer.js";
import { useNavigate } from "react-router-dom";
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

  return (
    <main>
      <div className="services-section-herobanner">
        <div className="services-container">
            <div className="services-content">
                <p className="services-subtitle">IT Services</p>
                <hr className="underline" />
                <h1 className="services-title">Our Services</h1>
                <p className="mb-4" style={{ color: "#f1f1f1"}}>
                    We are offering services across industries! Check below to see what services we offer!
                </p>
                <Link to="/contact" className="btn btn-primary-whatwedo">
                    Contact Us
                </Link>
            </div>
        </div>
      </div>
      <section className="grid-section-services">
        <div className="grid-container-services">
          <div className="grid-item-services">
            <img src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sample" className="grid-image" />
          </div>
          <div className="grid-item-services text">
            <h2>Innovative Solutions</h2>
            <p>
              We deliver cutting-edge solutions that transform businesses and drive growth. 
              Discover how our expertise can empower your journey to success.
            </p>
          </div>
        </div>
      </section>
      <h1 className="whatwe-do-title">Industries we serve</h1>
      <Industries />
      <div className="container py-5">
        <h1 className="whatwe-do-herotitle">Services We Offer</h1>
        <div className="row ">
          {/* Show first 4 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container ">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2 className="whatwe-do-title-text">{img.title}</h2>
              </div>
              <div class="gradient-overlay"></div>
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
                <div class="gradient-overlay"></div>
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
