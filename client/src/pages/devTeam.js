import React from "react";

const DevTeam = () => {
    return (
        <div className="w-full text-white py-4 min-vh-100">
            <div className="w-75 mx-auto">
                <div className="d-flex flex-column">
                    <h4 className="black-text" style={{ fontSize: "2.5rem" }}>The Website</h4>
                    <p className="m-0   " style={{ fontSize: "1.2rem" }}><span style={{ color: "#5CE1E6" }}>ecellmit.com</span> is the official website of The Entrepreneurship Cell 
                    of Manipal Institute of Technology, Manipal. It has been developed in house by a team of developers, consisting of students of MIT, Manipal. In 
                    addition to a neat and responsive UI, the website is filled with informational content, learning resources and an enthusiastic bunch of people ready to innovate.</p>
                </div>
                <div className="my-4">
                    <p className="m-0 text-muted font-weight-bold my-1">TECH STACK</p>
                    <div className="d-flex my-1">
                        {
                            ["react", "css3", "bootstrap", "javascript", "nodejs"].map((icon) => {
                                return <i key={icon} style={{ fontSize: "2.5rem" }} className={`lni lni-${icon} mr-2`}></i>
                            })
                        }
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <h4 className="black-text" style={{ fontSize: "2.5rem" }}>The Developers</h4>
                    <p style={{ fontSize: "1.2rem" }}>
                        Hailing from various domains of the E-Cell, this team of enthusiastic developers, united by a common goal, made this website possible. 
                    </p>
                </div>
            </div>
        </div>   
    );
}

export default DevTeam;