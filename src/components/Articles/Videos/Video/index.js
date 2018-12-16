import React,{Component} from 'react';
import {firebaseDB, firebaseLooper, firebaseVideos} from "../../../../firebase";

import "../../articles.css"
import VideosRelated from "../../../widgets/VideosList/VideosRelated/videosRelated"

class VideoArticle extends Component {

    state ={
        article:[],
        related:[]
    };

    componentWillMount(){

        firebaseDB.ref(`videos/${this.props.match.params.id}`).orderByChild('id').once('value')
            .then((snapshot)=>{
                let article = snapshot.val();
                this.setState({
                    article
                });
                this.getRelated()

            })


    }

    getRelated = () =>{

        firebaseVideos.orderByChild('id').limitToFirst(3).once('value')
            .then((snapshot)=>{
                const related = firebaseLooper(snapshot);
                this.setState({
                    related
                })
            })


    };

    render(){
        const article = this.state.article;
        console.log(this.state.related);

        return(
            <div>
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <VideosRelated
                    data={this.state.related}
                />

            </div>
        )
    }

}

export default VideoArticle