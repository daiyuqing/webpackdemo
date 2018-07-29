import React from 'react';
import 'static/css/index.scss';
import Routes from './routes/index.js';
class App extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div><Routes/></div>
	}
}

export default App;