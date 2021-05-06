import React from 'react'
import portfoliopic from "../../img/portfoliopic.jpeg";

export default function ProfilePic() {
    return (
        <>
            <div className="col-sm-7" >
                <img src={portfoliopic} className="rounded mx-auto d-block" width="300" height="320" alt="img-thumbnail" />
            </div>
        </>

    )
}
