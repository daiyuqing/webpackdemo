import React from 'react';
import Nav from './nav.js';

const projects=[
	{
		title:'VRLife',
		time:'2018.08-2019.02',
		text:'vrlife是一个VR游戏，用户可上传自己制作的场景和人物模型到游戏中给其他用户可以使用，使用了vue+php开发',
		pic_urls:['vrlife01','vrlife02','vrlife03','vrlife04','vrlife05'],
	},
	{
		title:'微信小游戏《标枪王者》',
		time:'2019.01-2019.02',
		text:'《标枪王者》是一个双人在线对战类小游戏，使用Node.js做后端',
		pic_urls:['javelin01','javelin02','javelin03','javelin04','javelin05'],
	},
	{
		title:'爱用商品移动端',
		time:'2017.5-2018.08',
		text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的商品而设计。这是它的移动Hybrid App(混合模式移动应用)部分，使用了weex容器+react框架开发。',
		pic_urls:['mobile01','mobile02','mobile03','mobile04','mobile05','mobile06','mobile07'],
	},
	{
		title:'爱用商品PC端',
		time:'2017.5-2018.08',
		text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的商品而设计。这是它的PC部分，使用了react+react-router+redux开发。',
		pic_urls:['pc01','pc02','pc03','pc04','pc05'],
	},
	// {
	// 	title:'爱用交易移动端',
	// 	time:'2017.5-2018.08',
	// 	text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的订单而设计。这是它的移动Hybrid App(混合模式移动应用)部分，使用了weex容器+react框架开发。',
	// 	pic_urls:['mobile08','mobile09','mobile10','mobile11','mobile12','mobile13','mobile14'],
	// },
	// {
	// 	title:'爱用交易PC端',
	// 	time:'2017.5-2018.08',
	// 	text:'爱用商品是一个电商后台管理项目，为了淘宝卖家管理自己店铺的订单而设计。这是它的PC部分，使用了react+react-router+redux开发。',
	// 	pic_urls:['pc06','pc07','pc08','pc09','pc10'],
	// },
	{
		title:'react-music',
		time:'2018.5-2018.07',
		text:'react-music是一个音乐类的移动端webapp,后端使用的是酷狗的接口，在此感谢酷狗。技术选型使用的是react+react-router+redux。',
		pic_urls:['mobile15','mobile16','mobile17','mobile18','mobile19','mobile20','mobile21'],
	}
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
				<img src={require('static/images/'+this.state.dialogPic+'.png')}/>
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
								return <img src={require('static/images/'+value+'.png')} key={key} onClick={this.showPic.bind(this,value)} className='project_pic'/>
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