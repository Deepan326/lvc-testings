import CarouselComponent from "./carsouel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import TransformationStartsHere from "./transformationStartsHere.js";
import Footer from "./footer.js";
import SpotLogo from "../assets/lvcSpo.jpg";
import AcaLogo from "../assets/lvcAca.jpg";
import FairJob from "../assets/jobSearch.jpg";

const Home = () => {
  return (
    <>
      <main style={{ padding: "20px", marginTop: "50px" }}>
        <div className="carsouelheight">
          <CarouselComponent />
        </div>

        {/* Fair Job Portal */}
        <section className="fairjob-section container py-5">
          <div className="row g-4 align-items-stretch">
            {/* Left: image + button */}
            <div className="col-12 col-md-5">
              <img
                src={FairJob}
                alt="Fair Job Portal preview"
                className="img-fluid rounded shadow-sm fairjob-img"
              />

              <a
                href="https://www.lvcfairjob.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light mt-3 w-100 fairjob-btn"
                aria-label="Open the Fair Job Portal website"
              >
                Visit Fair Job Portal
              </a>
            </div>

            {/* Right: title + bullets */}
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center h-100 fairjob-right">
              <h2 className="fairjob-title">Fair Job Portal</h2>
              <ul className="fairjob-list">
                <li>Modern job portal for equitable hiring</li>
                <li>Smart filters, clean UX, and fast search</li>
                <li>Recruiter tools for posting and tracking roles</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FULL-BLEED: Smart HR Scheduler */}
      <section className="bg-white">
        <div className="container-fluid px-0 py-5">
          <h1 className="text-dark">Smart HR Scheduler</h1>
          <p
            className="text-center mt-2 mb-0 fw-bold fst-italic fs-4"
            style={{ color: "#4f0694" }}
          >
            Launching soon
          </p>
        </div>
      </section>

      <main style={{ padding: "20px" }}>
        <section style={{ backgroundColor: "black" }} className="py-5">
          <h1 style={{ color: "white" }}>Founder's Project</h1>
          <p
            className="text-center mt-2 mb-0 fw-bold fst-italic fs-4"
            style={{ color: "#4f0694" }}
          >
            Launching soon
          </p>
        </section>
      </main>

      {/* FULL-BLEED: LVC Academy (same treatment as Smart HR) */}
      <section className="bg-white">
        <div className="container-fluid px-0 py-5">
          <h1 className="text-dark">LVC Academy</h1>
          <div className="partner-logos">
            <img src={AcaLogo} alt="Partner Logo" className="partner-logo" />
          </div>
        </div>
      </section>

      {/* Resume normal page padding/content */}
      <main style={{ padding: "20px" }}>
        {/* Spotlight Media */}
        <section
          style={{ fontSize: "14px", color: "000", fontWeight: "500", background: "black" }}
          className="py-5"
        >
          <h1 style={{ color: "white" }}>LVC Spotlight Media</h1>
          <div className="partner-logos">
            <img src={SpotLogo} alt="Partner Logo" className="partner-logo" />
          </div>
        </section>

        <div className="section-5">
          <h1 style={{ textAlign: "center", color: "white" }}>
            Transform your Goals into reality
          </h1>
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
                alt="Design & Planning"
              />
              <div className="overlay-text">
                <h2>Design & Planning</h2>
              </div>
            </div>
            <div className="col-md-4 position-relative image-container">
              <img
                className="w-100 custom-image"
                src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Execution & Reveal"
              />
              <div className="overlay-text">
                <h2>Execution & Reveal</h2>
              </div>
            </div>
          </div>
        </div>

        <TransformationStartsHere />
        <Footer />
      </main>
    </>
  );
};

export default Home;
