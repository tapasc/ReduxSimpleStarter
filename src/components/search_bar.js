import React,{Component} from "react";

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            terms:''
        }
    }

    render(){
        return (
            <div>
                <input onChange={this.onInputChange}/>
                <div>{this.state.terms}</div>
            </div>
            
        )
    }
    onInputChange(evt){
        this.setState({terms:evt.target.value});
        
        console.log(this);
    }
}

export default SearchBar;