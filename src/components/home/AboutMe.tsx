import React from "react";
import HomeCardInfo from "../../utils/HomeCardInfo"

function AboutMe() {
    return (
        <div className="col-sm-5">
            <div className="card w-80 mx-auto"
                style={{
                    backgroundColor: "rgba(29, 26, 218, 0.801)",
                    color: 'white'
                }}
            >
                <div className="card-body">
                    <p className="card-title text-center">Web Developer</p>
                    <p className="card-text">{HomeCardInfo}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe

