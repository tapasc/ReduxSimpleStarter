import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAdFNuPaY2rpULxqVeZmt71tiYhGkeQNLE';

class App extends Component {

    constructor (props){
        super(props);
        YTSearch({key:API_KEY,term:'surfer'},function(data){console.log(data)})
    }

    render(){
        return (
            <div>
                <div>Hi There...</div>
                <SearchBar/>
            </div>
        )        
    }
}

ReactDOM.render(<App/>,document.querySelector(".container"))