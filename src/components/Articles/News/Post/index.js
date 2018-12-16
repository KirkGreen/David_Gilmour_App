import React, { Component } from 'react';
import {firebaseDB, firebaseLooper} from "../../../../firebase";

import '../../articles.css';

import Header from './header'

class NewsArticles extends Component {

    state = {
        article:[],
    };

    componentWillMount(){
        firebaseDB.ref(`articles/${this.props.match.params.id}`).orderByChild('id').once('value')
            .then((snapshot)=>{
                let article = snapshot.val();
                this.setState({
                    article
                })


            })
    }

    render(){

        const article = this.state.article;

        return(
            <div className="articleWrapper">
                <Header
                    date={article.date}
                />
                <div className="articleBody">
                    <h1>{article.title}</h1>
                    <div className="articleImage"
                         style={{
                             background:`url('/images/person/${article.image}')`
                         }}
                    > </div>
                    <div className="articleText">
                        {article.body}
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsArticles;