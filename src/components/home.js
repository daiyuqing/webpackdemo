import React from 'react';
import Nav from './nav.js';
import Avatar from 'static/images/avatar.jpg';
class Home extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return (<div className="home">
			<Nav/>
	        <img src={Avatar} id="photo" alt="loading"/>
	        <h1>戴宇清</h1>
	        <h2>前端工程师</h2>
	        <h2>正确的判断来源于经验，经验来源于错误。</h2>
	        <p>765804005@qq.com</p>
	        <div className='home_bottom'>
		        <a href="https://github.com/daiyuqing" target='_blank'><i className="iconfont icon-github"></i></a>
		        <a href="https://daiyuqing.github.io/" target='_blank'><i className="iconfont icon-blog"></i></a>
	        </div>
	    </div>);
	}

}

export default Home;