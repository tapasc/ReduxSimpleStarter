import React,{Component} from 'react';
import VideoListItem from './video_list_item'
class VideoList extends Component{

    constructor(props){
        super(props);
  
    }

    render(){
        return (
            <div>
                <ul className="col-md-4 list-group">
                    {this.props.videos.map(function(video,index){
                        return <VideoListItem key={video.etag} video={video}/>
                    })}
                </ul>
            </div>
        )
    }
} 

export default VideoList;