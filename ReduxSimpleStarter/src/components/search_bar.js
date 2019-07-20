import React, { Component } from 'react';

//class component = internal record keeping
class SearchBar extends Component {
	constructor(props) {
		super(props);
		//inside of constructor method use this.state
		this.state = { term: ''};
	}
//class components must have render
	render() {
		//always return jsx
		//use setState outside of constructor 
		return (
			<div className="search-bar">
			 <input 
			 value= {this.state.term}
			 onChange ={event => this.onInputChange(event.target.value)}/>
				
			</div>
		)
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
}

export default SearchBar;