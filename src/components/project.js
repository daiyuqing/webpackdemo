import React from 'react';
import Nav from './nav.js';
import Mobile01 from 'static/images/mobile01.png';
import Mobile02 from 'static/images/mobile02.png';
import Mobile03 from 'static/images/mobile03.png';
import Mobile04 from 'static/images/mobile04.png';
import Mobile05 from 'static/images/mobile05.png';
import Mobile06 from 'static/images/mobile06.png';
import Mobile07 from 'static/images/mobile07.png';
import Pc01 from 'static/images/pc01.png';
import Pc02 from 'static/images/pc02.png';
import Pc03 from 'static/images/pc03.png';
import Pc04 from 'static/images/pc04.png';
import Pc05 from 'static/images/pc05.png';
const projects=[
	{
		title:'爱用商品移动端',
		time:'2017.5-2018.08',
		text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的商品而设计。这是它的移动Hybrid App(混合模式移动应用)部分，使用了weex容器+react框架开发。',
		pic_urls:[Mobile01,Mobile02,Mobile03,Mobile04,Mobile05,Mobile06,Mobile07],
	},
	{
		title:'爱用商品PC端',
		time:'2017.5-2018.08',
		text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的商品而设计。这是它的PC部分，使用了react+react-router+redux开发。',
		pic_urls:[Pc01,Pc02,Pc03,Pc04,Pc05],
	},
]
class Project extends React.Component{
	constructor(){
		super();
		this.state={
			showDialog:false,
			dialogPic:''
		}
	}
	showPic(value){
		this.setState({
			showDialog:true,
			dialogPic:value
		});
	}
	hidePic(){
		this.setState({
			showDialog:false
		});
	}
	render(){
		let dialog=null;
		if (this.state.showDialog) {
			dialog=(<div className="dialog" onClick={this.hidePic.bind(this)}>
				<img src={this.state.dialogPic}/>
			</div>);
		}
		return <div className='project'>
			<Nav/>
			<h1>项目经验</h1>
			<div className='project_content'>
				{projects.map((item,index)=>{
					return (<div className='project_item' key={index}>
						<h2 className='project_title'>{item.title}</h2>
						<p  className='project_time'>{item.time}</p>
						<p  className='project_text'>{item.text}</p>
						<div className="project_pic" style={{display:'flex'}}>
							{item.pic_urls.map((value,key)=>{
								return <img src={value} key={key} onClick={this.showPic.bind(this,value)} className='project_pic'/>
							})}
						</div>
						<div className="project_dot"></div>
					</div>)
				})}
			</div>
			{dialog}
		</div>
	}
}

export default Project;