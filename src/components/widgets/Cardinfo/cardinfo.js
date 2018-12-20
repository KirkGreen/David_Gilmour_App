import React from "react";
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import "./cardinfo.css";

const CardInfo = (props) => {

    const formatDate = (date) => {
        return moment(date).format(' DD-MM-YYYY')
    };

    return(
        <div className="cardNfo">
            <span className="date">
                <FontAwesome name="clock-o"/>
                {formatDate(props.date)}
            </span>
        </div>
    )
};

export default CardInfo;