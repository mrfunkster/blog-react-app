import React from 'react'

const SubscribeSection = () => {
    return (
        <section className="subscribe-section">
            <div className="container p-height">
                <div className="row v-centered centered p-height">
                    <div className="subscribe-section-content">
                        <h4>Subscribe to our newsletter</h4>
                        <input type="email" placeholder="Email Adress"/>
                        <div className="blue-btn">
                            <a href="/">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection