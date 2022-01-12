import React from "react"

const TeamCard = ({data}) => {
    return (
        <div className="col-md-4 col-12 h-50 px-2 my-3">
            <div className="d-flex flex-column align-items-center">
                <img alt={data.name} src={data.photo} width={200} style={{ borderRadius: "50%" }}></img>
                <div className="d-flex flex-column px-4 justify-content-center align-items-center text-left">
                    <h5 className="bold-text my-1 p-0 text-white" style={{ fontSize: "1.8rem" }}>{data.name}</h5>
                    <p style={{ color: "#5CE1E6" }}>{data.position}</p>
                    <h5 className="bold-text m-0 p-0 text-muted">Get in Touch</h5>
                    <div className="d-flex my-2">
                        {
                            data.social.linkedin ? 
                            <a href={data.social.linkedin} rel="noreferrer" target="_blank"><i className="lni lni-linkedin-original mr-1 text-white " style={{ fontSize: "1.3rem" }}></i> </a>
                            : ""
                        }
                        {
                            data.social.instagram ? 
                            <a href={data.social.linkedin} rel="noreferrer" target="_blank"><i className="lni lni-instagram-original mr-1 text-white " style={{ fontSize: "1.3rem" }}></i> </a>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard