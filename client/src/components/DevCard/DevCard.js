import React from "react"
import "./DevCard.css"

const DevCard = (props) => {

    const data = props.data

    return (
        <div className="dev-card d-flex justify-content-between align-items-center">
            <img src={data.photo} alt={data.photo} className="dev-image"></img>
            <div className="w-100 text-left px-3">
                <h6 className="dev-name">{data.name}</h6>
                <p className="dev-bio">{data.bio}</p>
                <div className="d-flex flex-wrap">
                {
                    data.github && 
                    <a href={data.github} target="_blank" rel="noreferrer">
                        <div className="d-flex align-items-center dev-tag mr-md-1"> 
                            <i className="lni lni-github-original"></i> 
                            <p className="my-auto mx-1">Github</p> 
                        </div>
                    </a>
                }
                {
                    data.website && 
                    <a href={data.website} target="_blank" rel="noreferrer">
                        <div className="d-flex align-items-center dev-tag mx-1">
                            <i className="lni lni-world"></i>
                            <p className="my-auto mx-1">Website</p>
                        </div>
                    </a>
                }
                {
                    data.instagram && 
                    <a href={data.instagram} target="_blank" rel="noreferrer">
                        <div className="d-flex align-items-center dev-tag ml-md-1">
                            <i className="lni lni-instagram-original"></i>
                            <p className="my-auto mx-1">Instagram</p>
                        </div>
                    </a>
                }
                </div>
            </div>
        </div>
    )
}

export default DevCard