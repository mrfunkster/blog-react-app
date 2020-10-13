import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MainSortField.css'

class MainSortFields extends Component {

    state = {
        isActive: false
    }

    markActive = (e) => {
        let tags = document.querySelectorAll('.tag-section span')
        for (let tag of tags) {
            tag.classList.remove('active')
        }
        e.target.classList.add('active')
    }

    render() {
        return (
            <section className="main-sort-field">
                <div className="container sort-container">
                    <div className="row sort-row">
                        <div className="sort-title">
                            <p>Sort by:</p>
                        </div>
                        <div className="tag-section">
                            <span className="active"
                                onClick={
                                    () => this.props.showPosts("allPosts")
                                }
                            >#all posts</span>
                            <span
                                onClick={
                                    () => this.props.showPosts("inspiration")
                                }
                            >#inspiration</span>
                            <span
                                onClick={
                                    () => this.props.showPosts("lifestyle")
                                }
                            >#lifestyle</span>
                            <span
                                onClick={
                                    () => this.props.showPosts("likedPosts")
                                }
                            >#Liked posts</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    showPosts: (tagName) => dispatch({
        type: "SHOW_POSTS",
        tagName: tagName
    })
})

export default connect(
    null,
    mapDispatchToProps
)(MainSortFields)