import { useState } from 'react';
import CarouselComponent from './carsouel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TransformationStartsHere from './transformationStartsHere.js';
import Footer from './footer.js';
import Logo from '../assets/lvc-icon.jpg';
import SpotLogo from '../assets/lvcSpo.jpg';
import AcaLogo from '../assets/lvcAca.jpg';

const Home = () => {
  return (
    <main style={{ padding: '20px', marginTop: '50px' }}>
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

      <section style={{ backgroundColor: 'white' }} className="py-5">
        <h1 style={{ color: 'black' }}>Section</h1>
      </section>

      {/* LVC Academy info */}
      <section className="container py-5 section-4">
        <h1 style={{ color: 'white' }}>
          LVC Academy - Future-Ready Tech Bootcamps
        </h1>
        <h2
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: '400',
          }}
        >
          Master the skills that matter in today&apos;s world -{' '}
          <strong>
            AI, Machine Learning, Data Science, and Full Stack Development.{' '}
          </strong>{' '}
          Our bootcamps combine{' '}
          <strong>70% hands-on learning with 30% theory, </strong>
          designed to make you{' '}
          <strong>career-ready within 6 to 12 months.</strong>
        </h2>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <em style={{ color: 'white', fontWeight: '400' }}>
            Learn. Shadow. Practice. Get Hired
          </em>
        </div>
        <div className="partner-logos">
          <img src={AcaLogo} alt="Partner Logo" className="partner-logo" />
        </div>
        <div
          className="highlight-cards-container"
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            className="difference-card"
            style={{ flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div className="card-content">
              <h3>Fast-Track 6-Month Bootcamps</h3>
              <ul>
                <li>
                  For students & professionals who want to{' '}
                  <strong>upskill quickly</strong>
                </li>
                <li>Covers all core modules + real projects + shadowing</li>
                <li>
                  Get <strong>job-ready in half a year</strong>
                </li>
              </ul>
              <span className="learn-more">Learn More</span>
            </div>
          </div>
          <div
            className="difference-card"
            style={{ flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div className="card-content">
              <h3>Comprehensive 12-Month Bootcamps</h3>
              <ul>
                <li>Deeper curriculum with advanced specializations</li>
                <li>
                  Extended <strong>shadowing + capstone projects</strong>
                </li>
                <li>
                  Ideal for those seeking{' '}
                  <strong>global career opportunities</strong>
                </li>
              </ul>
              <span className="learn-more">Learn More</span>
            </div>
          </div>
        </div>
        <div
          className="lvc-difference-section"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="difference-card">
            <h3
              style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}
            >
              Why Choose LVC Academy?
            </h3>
            <div className="card-content">
              <ul>
                <li>
                  <strong>Shadowing Opportunities →</strong> Learn directly by
                  observing professionals
                </li>
                <li>
                  <strong>Hands-On First →</strong> 70% real projects, not just
                  lectures
                </li>
                <li>
                  <strong>Career-Ready Pathways →</strong> Resume prep, mock
                  interviews, recruiter connects
                </li>
                <li>
                  <strong>Flexible Durations →</strong> 6-month fast-track OR
                  12-month comprehensive
                </li>
                <li>
                  <strong>Global Recognition →</strong> Certificates trusted by
                  employers
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className= 'table-responsive my-5'>
          <h2 class="mb-4">Feature Comparison</h2>
          <table class="table table-dark table-bordered text-center align-middle">
            <thead class="table-dark">
              <tr>
                <th>Feature</th>
                <th>LVC Academy</th>
                <th>Udemy</th>
                <th>Coursera</th>
                <th>Scaler</th>
                <th>UpGrad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duration Options</td>
                <td>✅ 6 &amp; 12 months</td>
                <td>❌ Undefined</td>
                <td>❌ Long timelines</td>
                <td>⚠️ Variable</td>
                <td>⚠️ 6–12 months only</td>
              </tr>
              <tr>
                <td>Shadowing</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Hands-On %</td>
                <td>✅ 70% practical</td>
                <td>❌ &lt;20%</td>
                <td>❌ &lt;25%</td>
                <td>⚠️ Coding only</td>
                <td>⚠️ Mixed</td>
              </tr>
              <tr>
                <td>Career Support</td>
                <td>✅ Resume, mock interviews, placements</td>
                <td>❌ None</td>
                <td>❌ Limited</td>
                <td>⚠️ Basic</td>
                <td>⚠️ General</td>
              </tr>
              <tr>
                <td>Outcome Focus</td>
                <td>✅ Job-ready in 6 or 12 months</td>
                <td>❌ Self-paced only</td>
                <td>❌ Academic</td>
                <td>⚠️ Narrow</td>
                <td>⚠️ Mixed ROI</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container my-5">
          <div class="p-5 bg-dark text-center rounded shadow">
            <h2 class="fw-bold mb-4">
              Choose Your Path: 6-Month Fast Track or 12-Month Comprehensive
              Bootcamp.
            </h2>
            <a href="https://www.lvcacademy.com" class="btn btn-primary btn-lg">
              View More Bootcamps
            </a>
          </div>
        </div>
      </section>

      {/* Empty Section */}
      <section
        style={{
          fontSize: '14px',
          color: '000',
          fontWeight: '500',
          background: 'white',
        }}
        className="py-5"
      >
        <h1 style={{ color: 'black' }}>Section</h1>
      </section>

      <div className="section-5">
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          Transform your Goals into reality{' '}
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
      <TransformationStartsHere />
      <Footer />
    </main>
  );
};

export default Home;
