import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Ai:ml.jpg";
import img2 from "../assets/genAi.jpg";
import img3 from "../assets/ui:ux.jpg";
import img4 from "../assets/digital.jpg";
import img5 from "../assets/dataScience.jpg";
import img6 from "../assets/Devops.jpg";
import img7 from "../assets/fullstack.jpg";
import img8 from "../assets/mobile.jpg";

import "../styles/careerIntern.css";


const InternshipCard = ({ title, description,img  }) => {
  const navigate = useNavigate();
  const handleFormClick = () => { 
    navigate("/careers-intern/form");
  }

  return (
    <div className="card" style={{ width: "19rem",border:"none" }}>
        <img src={img} className="card-img-top" alt={title}  style={{ height: "200px", width: "100%",objectFit: "cover",border:"none" }} />
      <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{color:"white"}}>{description}</p>
        <a  className="btn" style={{ marginTop: "20px", marginLeft: "70px",backgroundColor: "#d4af37", color: "black" ,fontWeight:"bold"}}
         onClick={handleFormClick}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const internshipData = [
  {
    id: 1,
    title: "AI/ML Intern",
    description:
      "Work with AI and Machine Learning technologies.",
    link: "/careers-intern/ai-ml",
    img:img1
  },
  {
    id: 2,
    title: "Gen AI Intern",
    description: "Work with Generative AI technologies.",
    link: "/careers-intern/gen-ai",
     img:img2
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    description: "Design user interfaces and improve user experience.",
    link: "/careers-intern/uiux",
    img:img3
  },
  {
    id: 4,
    title: "Digital Marketing Intern",
    description: "Learn digital marketing strategies and tools.",
    link: "/careers-intern/digital-marketing",
    img:img4
  },
  {
    id: 5,
    title: "Data Science Intern",
    description: "Work with data analysis and machine learning.",
    link: "/careers-intern/data-science",
    img:img5
  },
   {
    id: 6,
    title: "DevOps Intern",
    description: "Learn deployment and infrastructure management.",
    link: "/careers-intern/devops",
    img:img6
  },
  {
    id: 7,
    title: "Full Stack  Intern",
    description: "Work with both frontend and backend technologies.",
    link: "/careers-intern/full-stack",
    img:img7
  },
  {
    id: 8,
    title: "Mobile App Developer Intern",
    description: "Develop mobile applications for iOS and Android.",
    link: "/careers-intern/mobile-app",
    img:img8
  },

];

const CareersIntern = () => {
  return (
    <div style={{ marginTop: "120px", paddingLeft: "80px" }}>
      <div className="d-flex gap-4 flex-wrap">
        {internshipData.map((item) => (
          <InternshipCard
          
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default CareersIntern;
