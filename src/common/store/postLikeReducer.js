import { omit } from 'lodash'

const postLikeReducer = (state = {}, action) => {
    switch (action.type) {
        case "LIKE":
            return {
                ...state,
                [action.id]: true
            }
        case "DISLIKE": 
            return omit(state, action.id)
        default:
            return state
    }
}

export default postLikeReducer