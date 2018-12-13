import React,{Component} from 'react';
import axios from 'axios';
import { URL } from "../../../../config";

import "../../articles.css"
import VideosRelated from "../../../widgets/VideosList/VideosRelated/videosRelated"

class VideoArticle extends Component {

    state ={
        article:[],
        related:[]
    };

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
            .then( response => {
                this.setState({
                    article:response.data[0]
                });
                this.getRelated()
            })
    }

    getRelated = () =>{

        axios.get(`${URL}/videos`)
            .then( response => {
                this.setState({
                    related:response.data
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