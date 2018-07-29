import React from 'react';
import Nav from './nav.js';
const skills=[
	{title:'HTML',pic_url:'icon-html5',text:'熟练使用HTML，掌握HTML5新特性(canvas，localstorage等)。'},
	{title:'CSS',pic_url:'icon-css',text:'熟悉CSS3新特性(动画，弹性布局，媒体查询等)，熟悉Sass。'},
	{title:'JS',pic_url:'icon-javascript',text:'Javascript基础良好，熟悉JS新标准ES6的语法特性(类，箭头函数，解构赋值等)。'},
	{title:'React',pic_url:'icon-react',text:'熟练使用React,React Router、Redux全家桶。'},
	{title:'Git',pic_url:'icon-git',text:'熟练使用git进行代码管理及版本控制。'},
	{title:'MySql',pic_url:'icon-mysql',text:'熟悉MySql,能根据功能需求设计数据库，熟练使用数据库查询语句。'},
	{title:'其他框架',pic_url:'icon-qita',text:'熟悉jQuery、Vue.js等前端库和框架。'},
	{title:'工具',pic_url:'icon-tool',text:'熟悉webpack配置,熟练使用sublime text代码编辑器'}
]
class Skill extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return <div className='skill'>
			<Nav/>
			<h1>技术栈</h1>
			<div className='skill_content'>
				{skills.map((item,index)=>{
					return <div key={index} className='skill_item'>
						<i className={"iconfont "+item.pic_url }></i>
						<div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</div>
				})}
			</div>
		</div>
	}
}

export default Skill;