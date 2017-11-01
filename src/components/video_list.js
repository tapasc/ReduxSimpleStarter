import React, { Component } from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    return (
        <div>
            <ul className="col-md-4 list-group">
                {
                    props.videos.map(function (video) {
                        return (
                            <VideoListItem
                                key={video.etag}
                                video={video}
                                onVideoSelect={props.onVideoSelect}
                            />
                        )
                    })}
            </ul>
        </div>
    )
}



export default VideoList;