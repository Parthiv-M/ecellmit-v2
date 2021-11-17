import React from "react"

const LandingPage = () => {
    return (
        <div className="container">
            <section className="partners">
                <div className="container">
                    <h1 className="slide-heading text-white text-left">Partners</h1>
                    <div className="row row-cols-3">
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logo" alt="" height="100%" width="100%" /></div>
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logos" alt="" height="100%" width="100%" /></div>
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logo big" alt="" height="100%" width="100%" /></div>
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logo tech" alt="" height="100%" width="100%" /></div>
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logo company" alt="" height="100%" width="100%" /></div>
                        <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logo zoom" alt="" height="100%" width="100%" /></div>
                    </div>
                </div>
            </section>

            <section className="director">
                <div className="container">
                    <h1 className="slide-heading text-white mt-5 p-1 text-left ">Director's note</h1>
                    <div className="container">
                        <div className="row row-cols-2">
                            <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logos" alt="" height="100%" width="100%" /></div>
                            <div className="col text-light p-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-light p-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="director">
                <div className="container">
                    <h1 className="slide-heading text-white mt-5 p-1 text-left">Contact Us</h1>
                    <div className="container">
                        <div className="row-2">
                            <div className="col text-light p-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                            <div className="col p-1"><img src="https://source.unsplash.com/900x500/?logos" alt="" height="100%" width="100%" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage