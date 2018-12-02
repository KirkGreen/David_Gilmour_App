import React from "react";
import FontAwesome from 'react-fontawesome';

import "./cardinfo.css";

const CardInfo = (props) => {
    return(
        <div className="cardNfo">
            <span className="date">
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
};

export default CardInfo;