
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import fetchJsonp from 'fetch-jsonp';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			a:'一路向北'
		}
	}
	componentWillMount(){
		// fetch('http://localhost:2000/getRank').then((res)=>{
		// 	return res.json();
		// }).then((data)=>{
		// 	console.log(data);
		// });
		// fetch('http://m.kugou.com/singer/class&json=true', {
  //           method : 'GET',
  //           mode : 'no-cors',
  //           credentials: 'include'
  //       }).then((res)=>{
  //       	res.json();
  //       }).then(function(responseText){
  //           console.log(responseText);
  //       }, function(error){
  //           console.log(error);
  //       });
		// fetchJsonp('http://m.kugou.com/singer/class&json=true',{jsonpCallback: 'callback'}).then((res)=>{
		// 	res.json();
		// }).then((data)=>{
		// 	console.log(data);
		// });
	}
	render(){
		return (<div className='a'>
			<p>{this.state.a}</p>
			<div>asfadasd</div>
			<audio  autoPlay="autoplay">
			  <source src="http://video.5054399.com/music/touwenzid/ylxb.mp3" type="audio/mpeg" />
			Your browser does not support the audio element.
			</audio>
		</div>)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));