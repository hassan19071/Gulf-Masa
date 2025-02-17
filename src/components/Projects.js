import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import project01 from "../assets/project01.jpg";
import project02 from "../assets/project02.jpg";
import project03 from "../assets/project08.jpg";
import project04 from "../assets/project04.jpg";
import project05 from "../assets/project09.jpg";
import project06 from "../assets/project10.jpg";
import "./styling/projects.scss";

function ProjectsSection() {
  const projects = [
    project01,
    project02,
    project03,
    project04,
    project05,
    project06,
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open popup with selected index
  const openPopup = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  // Close popup
  const closePopup = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="projects py-5">
      <div className="container px-lg-5">
        <div className="head text-center">
          <h2>GMCO Projects</h2>
          <p>Discover our projects</p>
        </div>
        <div className="row mt-2">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 mt-3">
              <div className="project" onClick={() => openPopup(index)}>
                <img src={project} alt={`Project ${index + 1}`} width="100%" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Popup with Navigation */}
      {selectedIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              <FaTimes />
            </span>
            <img
              src={projects[selectedIndex]}
              alt={`Project ${selectedIndex + 1}`}
            />
            <button className="prev-btn" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
