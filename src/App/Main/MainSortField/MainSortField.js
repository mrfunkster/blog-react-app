import React, { Component } from 'react'

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
                                onClick={this.markActive}
                            >#all posts</span>
                            <span
                                onClick={this.markActive}
                            >#inspiration</span>
                            <span
                                onClick={this.markActive}
                            >#lifestyle</span>
                            <span
                                onClick={this.markActive}
                            >#Liked posts</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainSortFields