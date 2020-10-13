import { combineReducers } from 'redux'
import postLikeReducer from './postLikeReducer'

const rootReducer = combineReducers({
    postsLikeState: postLikeReducer
})

export default rootReducer