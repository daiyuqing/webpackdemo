import React from 'react';
import './index.css';

class App extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
		fetch('/kugou/singer/class&json=true').then( (res) => res.json()).then(
            (result)=>{
                console.log(result);
            },(error)=>{
                console.log(error);
            }
        );
	}
	render(){
		return <div>hello world!</div>
	}
}

export default App;