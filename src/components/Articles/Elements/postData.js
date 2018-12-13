import React from 'react'
import '../articles.css'

const PostData = (props) => {

    return(
        <div className="articlePostData">
            <div>
                Date:<br/>
                <span>{props.data.date}</span>
            </div>

        </div>
    )

};

export default PostData;