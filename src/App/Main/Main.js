import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './Main.css'

import MainPageContent from './MainPageContent'
import BlogCardPageContent from './BlogCardPageContent'
import BlogData from '../../common/data/BlogData'
import UnaviablePage from '../../common/components/UnaviablePage/UnaviablePage'

class Main extends Component {

    state = {
        BlogCardItemContent: {
            cardId: 11,
            belonging: "blog-card-big",
            cardTag: "Lifestyle",
            cardLink: "/",
            cardName: "10 Things To Do To Change Your Life Forever",
            cardImage: "/images/content/blog_card_big.png",
            cardContent: "The one constant thing in our life is change. We cannot avoid it and the more we resist change the tougher our life becomes. I know this because I was very skilled at deflecting change in life.",
            cardContentFull: "Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar. Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar.",
            cardAuthorName: "Henry Little",
            cardAuthorPhoto: "/images/content/henry_little_photo.png",
            cardDate: "Apri 28, 2016   10:15",
            cardComments: "7",
            cardLikes: "15",
        }
    }

    copyBlogDataToState = (cardId) => {
        let resultObject = BlogData.filter(dataObj => dataObj.cardId === cardId)[0];
        this.setState(()=>({
            BlogCardItemContent: resultObject
        }));
    }

    render() {
        return (
            <main className="main-app">
                <AnimatePresence>
                    <Switch>
                        <Route path="/" exact render={()=>(
                            <MainPageContent 
                                copyBlogDataToState = {this.copyBlogDataToState}
                            />
                        )}/>
                        <Route path="/cards/:cardLink" render={()=>(
                            <BlogCardPageContent 
                                cardName = {this.state.BlogCardItemContent.cardName}
                                cardImage = {this.state.BlogCardItemContent.cardImage}
                                cardTag = {this.state.BlogCardItemContent.cardTag}
                                cardAuthorName = {this.state.BlogCardItemContent.cardAuthorName}
                                cardComments = {this.state.BlogCardItemContent.cardComments}
                                cardLikes = {this.state.BlogCardItemContent.cardLikes}
                                cardAuthorPhoto = {this.state.BlogCardItemContent.cardAuthorPhoto}
                                cardContent = {this.state.BlogCardItemContent.cardContent}
                                cardDate = {this.state.BlogCardItemContent.cardDate}
                                cardContentFull = {this.state.BlogCardItemContent.cardContentFull}
                                cardId = {this.state.BlogCardItemContent.cardId}
                            />
                        )} />
                        <Route path="/pages/:menuPages" exact component={UnaviablePage} />
                    </Switch>
                </AnimatePresence>
            </main>
        )
    }
}


export default Main