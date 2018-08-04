import React from 'react';
import Nav from './nav.js';

const projects=[
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
				<img src={'https://q.aiyongbao.com/item/web/images/pricewatermark/'+this.state.dialogPic+'.png'}/>
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
								return <img src={'https://q.aiyongbao.com/item/web/images/pricewatermark/'+value+'.png'} key={key} onClick={this.showPic.bind(this,value)} className='project_pic'/>
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