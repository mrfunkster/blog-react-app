import { combineReducers } from 'redux'
import postLikeReducer from './postLikeReducer'
import searchReducer from './searchReducer'
import sortReducer from './sortReducer'

const rootReducer = combineReducers({
    postsLikeState: postLikeReducer,
    postsToShow: sortReducer,
    searchState: searchReducer
})

export default rootReducer