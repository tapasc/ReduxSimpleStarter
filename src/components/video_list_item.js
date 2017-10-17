import React from 'react'


const VideoListItem = (props) => {
    return (
        <li><img src={props.video.snippet.thumbnails['default'].url}/></li>
    )
}

export default VideoListItem;