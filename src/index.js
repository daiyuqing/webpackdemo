'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
	constructor(){
		super();
		this.state={
			a:123
		}
	}
	render(){
		return (<div>{this.state.a}</div>)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));