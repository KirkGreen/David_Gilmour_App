import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {firebaseArticles, firebaseLooper} from "../../../firebase";

import "./newsList.css";

import Button from "../Buttons/buttons"
import CardInfo from "../Cardinfo/cardinfo"

class NewsList extends Component {

    state = {
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    };

    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request = (start,end) => {

        firebaseArticles.orderByChild("id").startAt(start).endAt(end).once("value")
            .then((snapshot)=>{
                const articles = firebaseLooper(snapshot);
                this.setState({
                    items:[...this.state.items,...articles],
                    start,
                    end
                })
            })
            .catch(e=>{
                console.log(e)
            })
    };

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1,end)
    };

    renderNews = (type) => {
        let template = null;
        
        switch (type){
            case('card'):
                template = this.state.items.map((item,i) => (
                    <CSSTransition
                        classNames={{
                            enter:'newslist_wrapper',
                            enterActive:"newslist_wrapper_enter"
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className="newslist_item">
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            case('cardMain'):
                template = this.state.items.map((item,i) => (
                    <CSSTransition
                        classNames={{
                            enter:'newslist_wrapper',
                            enterActive:"newslist_wrapper_enter"
                        }}
                        timeout={500}
                        key={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className="flex_wrapper">
                                <div className="left"
                                     style={{background:`url('/images/person/${item.image}')`}}
                                >
                                    <div>

                                    </div>
                                </div>
                                <div className="right">
                                    <CardInfo
                                    date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </CSSTransition>
                ));
                break;

            default:
                template = null;
        }

        return template;
    };

    render(){
        return(
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />

            </div>
        )
    }

}

export default NewsList;