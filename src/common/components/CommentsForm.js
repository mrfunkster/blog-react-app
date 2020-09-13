import React, { Component } from 'react'

import CommentsFormListItem from './CommentsFormListItem'

class CommentsForm extends Component {

    state = {
        focusLineStyles1 : {
            transform: "scaleX(0)"
        },
        focusLineStyles2 : {
            transform: "scaleX(0)"
        },
        commentsState: {
            items: [],
            currentItem: {
                user: '',
                text: '',
                key: '',
            }
        }
    }

    handleInputComment = (e) => {
        e.preventDefault()
        let userName = document.querySelector('.user-input').value
        this.setState({
            commentsState: {
                items: [...this.state.commentsState.items],
                currentItem: {
                    user: userName,
                    text: e.target.value,
                    key: Date.now()
                }
            }
        })
    }

    handleInputUser = (e) => {
        this.setState({
            commentsState: {
                items: [...this.state.commentsState.items],
                currentItem: {
                    user: e.target.value,
                    text: '',
                    key: ''
                }
            }
        })
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.commentsState.currentItem;
        console.log(newItem)
        if (newItem.text!=='' && newItem.user!=='') {
            const newItems = [...this.state.commentsState.items, newItem]
            this.setState({
                commentsState: {
                    items: newItems,
                    currentItem: {
                        user: '',
                        text: '',
                        key: ''
                    }
                }
            })
        } else {
            alert("You must enter an information in a fields below!")
        }
        this.onInputUnFocus2();
    }

    commentsCount = (initCount) => {
        let count = this.state.commentsState.items.length
        return +initCount + count
    }

    deleteItem = (key) => {
        const filteredItems = this.state.commentsState.items.filter(item => item.key!==key);
        this.setState({
            commentsState: {
                items: filteredItems,
                currentItem: {
                    user: '',
                    text: '',
                    key: ''
                }
            }
        })
    }

    onInputFocus1 = () => {
        this.setState({
            focusLineStyles1: {
                transform: "scaleX(1)",
            }
        })
    }

    onInputUnFocus1 = () => {
        this.setState({
            focusLineStyles1: {
                transform: "scaleX(0)"
            }
        })
    }

    onInputFocus2 = () => {
        this.setState({
            focusLineStyles2: {
                transform: "scaleX(1)",
            }
        })
    }

    onInputUnFocus2 = () => {
        this.setState({
            focusLineStyles2: {
                transform: "scaleX(0)"
            }
        })
    }

    render() {
        const {
            cardComments
        } = this.props
        return (
            <div className="comments-section">
                <div className="comment-title">Comments ({this.commentsCount(cardComments) < 10 ? "0" + this.commentsCount(cardComments) : this.commentsCount(cardComments)}):</div>
                <form action="" className="comment-form" onSubmit={this.addItem}>
                    <input type="text" className="user-input" placeholder="Enter name here..."
                        value={this.state.commentsState.currentItem.user}
                        onChange={this.handleInputUser}
                        onFocus={this.onInputFocus1}
                        onBlur={this.onInputUnFocus1}
                    />
                    <div className="focus-line"
                        style={this.state.focusLineStyles1}
                    ></div>
                    <input type="text" placeholder="Enter coment here..."
                        value={this.state.commentsState.currentItem.text}
                        onChange={this.handleInputComment}
                        onFocus={this.onInputFocus2}
                        onBlur={this.onInputUnFocus2}
                    />
                    <div className="focus-line"
                        style={this.state.focusLineStyles2}
                    ></div>
                    <button>Add Comment</button>
                </form>
                <CommentsFormListItem 
                    items = {this.state.commentsState.items}
                    deleteItem = {this.deleteItem}
                />
            </div>
        )
    }
}

export default CommentsForm