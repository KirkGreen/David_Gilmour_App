import React from 'react';

import './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../Cardinfo/cardinfo';

const VideosTemplate = (props) => {

    return props.data.map( (item,i) => (

        <Link to={`/videos/${item.id}`} key={i}>
            <div className="videoListItem_wrapper">
                <div className="left"
                     style={{
                         background:`url(/images/person/${item.image})`
                     }}
                >
                    <div></div>
                </div>
                <div className="right">
                    <CardInfo date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>

    ))

};

export default VideosTemplate;