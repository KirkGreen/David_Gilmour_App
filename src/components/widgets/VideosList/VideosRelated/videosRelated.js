import React from "react"
import "../videosList.css"

import VideosTemplate from "../VideosTamplate"

const videosRelated = (props) => (
    <div className="relatedWrapper">
        <VideosTemplate
            data={props.data}
        />
    </div>
);

export default videosRelated;