import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, POST_SMURF } from '../actions'

const initialState = {
    // local data
    isLoading: false,
    error: "",

    //from API
    data: [],

    //for Form
}

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            console.log("fetching smurfs")
            return {
                ...state,
                isLoading: true,
                error: ""
            }
            case FETCH_SMURFS_SUCCESS: {
                return {
                    ...state,
                    isLoading: false,
                    error: "",

                    //the big one
                    data: action.payload,
                }
            }
            case FETCH_SMURFS_FAIL: {
                return {
                    ...state,
                    isLoading: false,
                    error: "Oh no!"
                }
            }
            case POST_SMURF: {
                console.log("you made it to the reducer")
                return {
                    ...state,
                    isLoading: false,
                    error: "",

                    data: [...state.data, action.payload]
                }
            }

        default:
            return state
    }
}

export default smurfReducer