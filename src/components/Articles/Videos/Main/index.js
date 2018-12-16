import React from 'react'
import VideosList from '../../../widgets/VideosList/videosList'

const VideoMain = () =>(
    <VideosList
        type="card"
        title={false}
        loadmore={true}
        start={0}
        amount={5}

    />
);

export default VideoMain;