import React, { useEffect } from "react"

const ResourcePage = () => {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/resources/`)
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div className="">Individual Resource Page</div>
    )
}

export default ResourcePage