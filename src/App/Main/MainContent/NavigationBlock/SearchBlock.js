import React, { Component } from 'react'
import { connect } from 'react-redux';


class SearchBlock extends Component {

    state = {
        search: "",
        searchResult: ""
    }

    searchSubmit = (e) => {
        e.preventDefault();
        this.props.searchToState(this.state.search)
        this.setState(prevState => ({
            search: "",
        }))
    }

    inputHandler = (e) => {
        e.persist();
        this.setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    render() {
        return (
            <div className="search-block">
                <form onSubmit={(e)=>{
                    this.searchSubmit(e)
                    this.props.showPosts("search")
                }}>
                    <input type="text" placeholder="Search posts by name..."
                        value={this.state.search}
                        onChange={this.inputHandler}
                        name="search"
                    />
                    <button>Search</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchToState: (data) => dispatch({
        type: "SUBMIT_SEARCH",
        data
    }),
    showPosts: (tagName) => dispatch({
        type: "SHOW_POSTS",
        tagName: tagName
    })
})

export default connect(
    null,
    mapDispatchToProps
)(SearchBlock)