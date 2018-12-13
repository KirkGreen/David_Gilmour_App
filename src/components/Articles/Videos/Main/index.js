import React from 'react'
import VideosList from '../../../widgets/VideosList/videosList'

const VideoMain = () =>(
    <VideosList
        type="card"
        title={false}
        loadmore={false}
        start={0}
        amount={10}

    />
);

export default VideoMain;