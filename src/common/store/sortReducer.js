const sortReducer = (state = {show: "allPosts"}, action) => {
    switch (action.type) {
        case "SHOW_POSTS":
            return {
                show: action.tagName
            }
        default: return state
    }
}

export default sortReducer