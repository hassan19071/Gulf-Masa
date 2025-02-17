import React from "react";
import { Link } from "react-router-dom";
import "./styling/navbar.scss";
function Breadcrumb({page}) {
  return (
    <div className="breadcrumb-container py-2">
      <div className="container px-lg-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li> 
          <li className="breadcrumb-item active" aria-current="page">
            {page}
          </li>
        </ol>
      </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
