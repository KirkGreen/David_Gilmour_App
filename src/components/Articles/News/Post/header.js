import React from 'react'

import PostData from "../../Elements/postData"

const header = (props) => {

    const postData = (date) => (
        <PostData data={{date}}/>
    );



    return(
        <div>
            {postData(props.date)}
        </div>
    )

};

export default header;