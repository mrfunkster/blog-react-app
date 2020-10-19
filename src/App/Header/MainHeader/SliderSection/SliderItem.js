import React from "react"

const SliderItem = ({
    slideBackground,
    tag,
    name,
    link,
    authorName,
    authorPhoto,
    authorDate,
    authorComments,
    authorLikes,
    onLoad = () => {
        setTimeout(()=>{
            let loader = document.querySelector("#page-loader")
            loader.classList.add("hide")
            document.body.classList.remove("lock")
        }, 1000)
    }
}) => {
    return (
        <div className="slide">
            <div className="slide-background">
                <img src={slideBackground} alt=""
                    onLoad={onLoad}
                />
            </div>
            <div className="slide-content">
                <h2>{tag}</h2>
                <h3>{name}</h3>
                <div className="blue-btn">
                    <a href={link}>Read More</a>
                </div>
            </div>
            <div className="slide-author-info">
                <div className="author-photo">
                    <img src={authorPhoto} alt=""/>
                </div>
                <div className="author-name">
                    <h4>{authorName}</h4>
                </div>
                <div className="author-date">
                    <h4>{authorDate}</h4>
                </div>
                <div className="author-social-activities">
                    <div className="author-activities comments">
                        <div className="icon">
                            <img src="/images/icons/forum.png" alt=""/>
                        </div>
                        <div className="text-info">Comments ({authorComments})</div>
                    </div>
                    <div className="author-activities likes">
                        <div className="icon">
                            <img src="/images/icons/favorite_border.png" alt=""/>
                        </div>
                        <div className="text-info">Likes ({authorLikes})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem