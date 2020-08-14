import React from 'react'

const SmurfForm = props => {
    return (
        <section className="form-section">
            <h2>Create a Smurf:</h2>
            <form>
                <label>Your Smurf's Name:&nbsp;
                    <input
                    type="text"
                    name="name"
                    placeholder="Your smurf here ig"
                    />
                </label>
                <label>Your Smurf's Age:&nbsp;
                    <input
                    type="text"
                    name="name"
                    placeholder="Any age you want"
                    />
                </label>
                <label>Your Smurf's Height:&nbsp;
                    <input
                    type="text"
                    name="name"
                    placeholder="Probably a short height?"
                    />
                </label>
            </form>
        </section>
    )
}

export default SmurfForm