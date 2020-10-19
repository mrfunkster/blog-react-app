const loaderReducer = (state = {isLoaded: false}, action) => {
    switch(action.type) {
        case "PAGE_LOADED":
            return {isLoaded: true}
        default: return state
    }
}

export default loaderReducer