import React from 'react'
import {motion} from 'framer-motion'

import './CommentsFormListItem.css'
import { convertDate } from '../data/Functions'

const CommentsFormListItem = ({
    items,
    deleteItem
}) => {
    return (
        <div className="comments-form-list">
            {
                items.map(({
                    text,
                    key,
                    user
                })=>(
                    <motion.div className="comments-form-list-item" key={key}
                        initial={{opacity: 0}}
                        exit={{opacity: 0}}
                        animate={{opacity: 1}}
                    >
                        <p className="user-data">
                            <span>{user}</span> says:</p>
                        <p className="comment-content">{text}</p>
                        <div className="remove-btn"
                            onClick={() => deleteItem(key)}
                        >&#10006;</div>
                        <p className="date">{convertDate(key)}</p>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default CommentsFormListItem