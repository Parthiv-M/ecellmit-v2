import React from "react"
import { Link } from "react-router-dom"
import logo from "./../assets/eCellLight.png"

const Footer = () => {
    return (
        <footer>
            <div className="row m-0 row-cols-md-3 row-cols-1 container-fluid" style={{ backgroundColor: "#0E0E0E", minHeight: "30vh" }}>
                <div className="row row-cols-2 p-5 mx-auto">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <Link href="/" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Home</p>
                        </Link>
                        <Link href="/blogs" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Blogs</p>
                        </Link>
                        <Link href="/blogs" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Resources</p>
                        </Link>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <Link href="/team" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Team</p>
                        </Link>
                        <Link href="/blogs" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Brochure</p>
                        </Link>
                        <Link href="/wall-of-fame" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Wall Of Fame</p>
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center p-2">    
                    <img src={logo} alt="E-Cell logo" height={180}></img>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center text-white text-center p-3">
                    <h2>The Entrepreneurship Cell</h2>
                    <h3>MIT, Manipal</h3>
                    <p style={{ fontSize: "1.4rem" }}>© 2021</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer