import React from 'react'

const Smurf = details => {
    return (
        <div className="smurf-container">
            <p>{details.details.name}</p>
            <p>{details.details.age}</p>
            <p>{details.details.height}</p>
        </div>
    )
}

export default Smurf