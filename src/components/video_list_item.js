import React from 'react'


const VideoListItem = (props) => {
    const IMGURL = props.video.snippet.thumbnails.default.url;
    const TITLE = props.video.snippet.title;

    return (
        
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media left">
                    <img className="media-object" src={IMGURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <div>{TITLE}</div>
                    </div>
                    <div className="PlayButton" onClick={()=>{props.onVideoSelect(props.video)}}>Play</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;