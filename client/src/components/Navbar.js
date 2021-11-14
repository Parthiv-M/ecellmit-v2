import React from "react"
import { useLocation } from "react-router-dom";
import logo from "./../assets/eCellLight.png"

const NavBar = () => {

    const location = useLocation();

    return (
        <div className="w-full sticky-top" style={{ zIndex: 1000 }}>
            {/* navbar component */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#050505" }}>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="/">
                      <img src={logo} height={40} alt="MIST Logo"></img>
                  </a>
                  <div className="flex-grow-1"></div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/resources" ? "active" : ""}`} aria-current="page" href="/resources">Resources</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/alumni" ? "active" : ""}`} aria-current="page" href="/alumni">Alumni</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/wall-of-fame" ? "active" : ""}`} aria-current="page" href="/wall-of-fame">Wall of Fame</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`} aria-current="page" href="/blog">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
}

export default NavBar