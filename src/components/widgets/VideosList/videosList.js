import React,{ Component } from "react";
import './videosList.css';
import {firebaseVideos, firebaseLooper, firebaseArticles} from "../../../firebase";

import Button from "../Buttons/buttons";
import VideosTemplate from './VideosTamplate'

class VideosList extends Component{

    state ={
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    };

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {

        firebaseVideos.orderByChild("id").startAt(start).endAt(end).once("value")
            .then((snapshot)=>{
            const videos = firebaseLooper(snapshot);
            this.setState({
                videos:[...this.state.videos,...videos],
                start,
                end
            })
        })
            .catch(e=>{
                console.log(e)
            })
    };

    renderVideos = () => {
        let template = null;

        switch (this.props.type){
            case('card'):
                template = <VideosTemplate data={this.state.videos}/>;
                break;
            default:
                template = null;
        }
        return template
    };

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1, end)
    };

    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type="loadmore"
                loadMore={()=> this.loadMore()}
                cta="Load More videos"
            />
            :
            <Button type="linkTo" cta="More videos soon" linkTo="/videos"/>
    };

    renderTitle = () => {
        return this.props.title ?
                <h3><strong>DAVID GILMOUR</strong> videos </h3>
            : null
    };

    render(){
        return(
            <div className="videoList_wrapper">
                { this.renderTitle()}
                { this.renderVideos()}
                { this.renderButton()}
            </div>
        )
    }


}

export default VideosList