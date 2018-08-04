import { BrowserRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Home from 'components/home.js';
import Project from 'components/project.js';
import Skill from 'components/skill.js';
import React, {Component} from 'react';
const routes=()=>{
	return <BrowserRouter history={hashHistory}>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path='/project' exact component={Project}/>
			  <Route path='/skill' exact component={Skill}/>
			</Switch>
		</BrowserRouter>
}
export default routes;