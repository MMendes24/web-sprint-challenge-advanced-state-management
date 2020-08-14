import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSmurfs }  from '../actions'

import Smurf from './Smurf'

const SmurfList = props => {
    
    useEffect( () => {
        props.fetchSmurfs()
        console.log(props)
    }, [])

    return (
        <div>
            {props.data.map((item, index) => {
                return (
                     <Smurf key={index} details={item} />
                     )                    
                })}
        </div>

    )

}

const mapStateToProps = state => {
    console.log(state.data)
    return {
        isLoading: state.isLoading,
        error: state.error,

        //data coming from API
        data: state.data
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)
