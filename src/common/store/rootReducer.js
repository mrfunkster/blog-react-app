import { combineReducers } from 'redux'
import postLikeReducer from './postLikeReducer'
import searchReducer from './searchReducer'
import sortReducer from './sortReducer'
import loaderReducer from './loaderReducer'

const rootReducer = combineReducers({
    postsLikeState: postLikeReducer,
    postsToShow: sortReducer,
    searchState: searchReducer,
    loaderState: loaderReducer
})

export default rootReducer