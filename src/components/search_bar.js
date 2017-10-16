import React,{Component} from "react";

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            terms:''
        }
    }

    render(){
        return (
            <div>
                <input onChange={evt => this.setState({terms:evt.target.value})}/>
                <div>{this.state.terms}</div>
            </div>
            
        )
    }
    // onInputChange(evt){
    //     //this.setState({terms:evt.target.value});
        
    //     console.log(this);
    // }
}

export default SearchBar;