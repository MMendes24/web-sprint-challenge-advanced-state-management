import React, { useState } from 'react'

const SmurfForm = props => {
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState('')
    const [ height, setHeight ] = useState('')

    const handleChanges = e => {
        setName(e.target.value)
    }

    const handleAgeChanges = e => {
        setAge(e.target.value)
    }

    const handleHeightChanges = e => {
        setHeight(e.target.value)
    }

    return (
        <section className="form-section">
            <h2>Create a Smurf:</h2>
            <form className="smurf-form">
                <label>Your Smurf's Name:&nbsp;
                    <input
                    type="text"
                    name="name"
                    placeholder="Your smurf here ig"
                    value={name}
                    onChange={handleChanges}
                    />
                </label>
                <label>Your Smurf's Age:&nbsp;
                    <input
                    type="text"
                    name="age"
                    placeholder="Any age you want"
                    value={age}
                    onChange={handleAgeChanges}
                    />
                </label>
                <label>Your Smurf's Height:&nbsp;
                    <input
                    type="text"
                    name="height"
                    placeholder="Probably a short height?"
                    value={height}
                    onChange={handleHeightChanges}
                    />
                </label>
                <button>Submit Smurf</button>
            </form>
        </section>
    )
}

export default SmurfForm