import React, { Component } from 'react';
import axios from 'axios';
import { URL } from "../../../../config";

import '../../articles.css';

import Header from './header'

class NewsArticles extends Component {

    state = {
        article:[],
    };

    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
            .then( response => {
                this.setState({
                    article:response.data[0]
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