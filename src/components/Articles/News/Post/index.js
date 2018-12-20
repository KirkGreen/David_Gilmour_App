import React, { Component } from 'react';
import {firebase, firebaseDB} from "../../../../firebase";

import '../../articles.css';

import Header from './header'

class NewsArticles extends Component {

    state = {
        article:[],
        imageURL:[]
    };


    componentWillMount(){
        firebaseDB.ref(`articles/${this.props.match.params.id}`).orderByChild('id').once('value')
            .then((snapshot)=>{
                let article = snapshot.val();
                this.setState({
                    article
                });
                this.getImageURL(article.image)
            })
    }

    getImageURL = (filename) =>{
        firebase.storage().ref('images')
            .child(filename).getDownloadURL()
            .then(url => {
                this.setState({
                    imageURL: url
                });
            })
    };


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
                             background:`url('${this.state.imageURL}')`
                         }}
                    > </div>
                    <div className="articleText"
                        dangerouslySetInnerHTML={{
                            __html:article.body
                        }}
                    >
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsArticles;