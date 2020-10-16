const searchReducer = (state = {toSearch: ""}, action) => {
    switch (action.type) {
        case "SUBMIT_SEARCH":
            return {
                toSearch: action.data
            }
        default: return state
    }
}

export default searchReducer