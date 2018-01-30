
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component{
	constructor(){
		super();
		this.state={
			a:'一路向北...'
		}
	}
	render(){
		return (<div>
			<p>{this.state.a}</p>
			<audio  autoPlay="autoplay">
			  <source src="http://video.5054399.com/music/touwenzid/ylxb.mp3" type="audio/mpeg" />
			Your browser does not support the audio element.
			</audio>
		</div>)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));