import { combineReducers } from 'redux'
import postLikeReducer from './postLikeReducer'
import sortReducer from './sortReducer'

const rootReducer = combineReducers({
    postsLikeState: postLikeReducer,
    postsToShow: sortReducer
})

export default rootReducer