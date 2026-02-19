import React, { useState } from "react";
import "../styles/internForm.css";

const InternForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    degree: "",
    institution: "",
    graduationYear: "",
    percentage: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container" style={{marginTop:"40px"}}>
      <div className="form-card">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width:
                step === 1 ? "33%" :
                step === 2 ? "66%" :
                "100%"
            }}
          ></div>
        </div>

        <h2>
          {step === 1 && "Personal Information"}
          {step === 2 && "Education Information"}
          {step === 3 && "Address Information"}
        </h2>

        <form onSubmit={handleSubmit}>
          
          {step === 1 && (
            <>
              <div >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="text"
                name="degree"
                placeholder="Degree (B.E / B.Tech / B.Sc) *"
                value={formData.degree}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="institution"
                placeholder="Institution Name *"
                value={formData.institution}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="graduationYear"
                placeholder="Year of Graduation *"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="percentage"
                placeholder="Percentage / CGPA *"
                value={formData.percentage}
                onChange={handleChange}
                required
              />

              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="text"
                name="country"
                placeholder="Country *"
                value={formData.country}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="state"
                placeholder="State *"
                value={formData.state}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City *"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode *"
                value={formData.pincode}
                onChange={handleChange}
                required
              />

              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>

                <button type="submit">Pay</button>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  );
};

export default InternForm;
