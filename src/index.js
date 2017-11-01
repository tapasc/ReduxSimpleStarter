import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
import VideoDetails from './components/video_details'

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAdFNuPaY2rpULxqVeZmt71tiYhGkeQNLE';

class App extends Component {

    constructor (props){
        super(props);
        this.videoSearch = this.videoSearch.bind(this);
        this.state = {
            videos:[],
            selectedVideo:null
        }
        this.videoSearch('Tracy Budge');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term},data => {
            this.setState({videos:data,
                selectedVideo:data[0]
            })
        })
    }
    render(){
        return (
            <div>                
                <SearchBar/>
                <VideoDetails videos={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>{this.setState({selectedVideo})}}/>
            </div>
        )        
    }
}

ReactDOM.render(<App/>,document.querySelector(".container"))