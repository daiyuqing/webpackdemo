import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return <ul  className='nav'>
				<li><NavLink to='/' exact activeStyle={{background: '#108ee9'}}><i className="iconfont icon-home"></i></NavLink></li>
				<li><NavLink to='/skill' activeStyle={{background: '#108ee9'}}><i className="iconfont icon-skill"></i></NavLink></li>
				<li><NavLink to='/project' activeStyle={{background: '#108ee9'}}><i className="iconfont icon-project"></i></NavLink></li>
			</ul>
	}
}

export default Nav;