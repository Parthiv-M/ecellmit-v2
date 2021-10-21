import React from "react"
import { useLocation } from "react-router-dom";
import logo from "./../assets/eCellLight.png"

const NavBar = () => {

    const location = useLocation();

    return (
        <div className="w-full">
            {/* navbar component */}
            <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#050505" }}>
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a class="navbar-brand" href="/">
                      <img src={logo} height={40} alt="MIST Logo"></img>
                  </a>
                  <div className="flex-grow-1"></div>
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname === "/resources" ? "active" : ""}`} aria-current="page" href="/resources">Resources</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname === "/wall-of-fame" ? "active" : ""}`} aria-current="page" href="/wall-of-fame">Wall of Fame</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname === "/blogs" ? "active" : ""}`} aria-current="page" href="/blogs">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
}

export default NavBar