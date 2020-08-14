import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from '../actions'

const initialState = {
    // local data
    isLoading: false,
    error: "",

    //from API
    data: [],
}

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
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

        default:
            return state
    }
}

export default smurfReducer