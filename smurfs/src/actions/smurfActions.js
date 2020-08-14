import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'

const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS })

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_SMURFS_SUCCESS })
    })
}

// const postSmurfs = () => (dispatch) => {
//     axios
//     .post('http://localhost:3333/smurfs', newSmurf)
//     .then(res => {
//         dispatch({ type: POST_SMURF, payload: newSmurf})
//         console.log(res.data)
//     })
// }

export { fetchSmurfs }