import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postSmurfs }  from '../actions'

const SmurfForm = props => {
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ height, setHeight ] = useState('0cm')

    const handleChanges = e => {
        setName(e.target.value)
    }

    const handleAgeChanges = e => {
        setAge(e.target.value)
    }

    const handleHeightChanges = e => {
        setHeight(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        const newSmurf = 

            {
                name: name,
                age: age,
                height: height,
                id: new Date(),
            }
        
        console.log(newSmurf)
        props.postSmurfs(newSmurf)
        console.log("hey you made it below postSmurfs")
        
        setName('')
        setAge('')
        setHeight('')
    }

    return (
        <section className="form-section">
            <h2>Create a Smurf:</h2>
            <form className="smurf-form" onSubmit={onSubmit}>
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

export default connect(null, {postSmurfs})(SmurfForm)