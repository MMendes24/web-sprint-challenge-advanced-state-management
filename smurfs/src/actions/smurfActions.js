import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'
export const POST_SMURF = 'POST_SMURF'

const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS })

    axios
    .get('http://localhost:3333/smurfs')

    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })

    .catch(err => {
        dispatch({ type: FETCH_SMURFS_FAIL })
    })
}

const postSmurfs = (newSmurf) => (dispatch) => {
    dispatch({ type: FETCH_SMURFS })
    console.log("Smurfs fetched line 24")

    axios
    .post('http://localhost:3333/smurfs', newSmurf )
    .then(res => {
        console.log(res.data)
        dispatch({ type: POST_SMURF, payload: res.data})
    })

    .catch(err => {
        dispatch({ type: FETCH_SMURFS_FAIL })
    })
}

export { fetchSmurfs, postSmurfs }