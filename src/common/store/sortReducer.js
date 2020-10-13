const sortReducer = (state = {}, action) => {
    switch (action.type) {
        case "SHOW_POSTS":
            return {
                show: action.tagName
            }
        default: return state
    }
}

export default sortReducer