import React from 'react'
import {motion} from 'framer-motion'

import './CommentsFormListItem.css'

const convertDate = (date) => {
    let dateRes = new Date(date)
    let monthsArray = ["Jan", "Feb", "Mar",  "Apri",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"];
    let year = dateRes.getFullYear();
    let month = monthsArray[dateRes.getMonth()];
    let day = dateRes.getDate();
    let hours = dateRes.getHours();
    let minutes = dateRes.getMinutes();
    let seconds = dateRes.getSeconds();
    let resultString = `${month} ${day}, ${year} ${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    return resultString
}

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