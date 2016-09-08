import React , { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory,Redirect,IndexRedirect } from 'react-router'

import App from '../view'
import Home from '../view/home'

import Operate from '../view/operate'

import AwardList from "../view/operate/award/list"
import AwardDetail from "../view/operate/award/detail"
import AwardAdd from "../view/operate/award/add"

import PropellingList from "../view/operate/propelling/list"
import PropellingDetail from "../view/operate/propelling/detail"
import PropellingAdd from "../view/operate/propelling/add"

import User from '../view/user'
export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/Home"/>
        <Route path="home" component={Home}/>
        <Route path="operate" component={Operate}>
        	<Route path="award">
	        	<Route path="list/:id" component={AwardList}></Route>
	        	<Route path="detail:/id" component={AwardDetail}></Route>
	        	<Route path="add" component={AwardAdd}></Route>
        	</Route>
        	<Route path="propelling">
	        	<Route path="list/:id" component={PropellingList}></Route>
	        	<Route path="detail:/id" component={PropellingDetail}></Route>
	        	<Route path="add" component={PropellingAdd}></Route>
        	</Route>
        </Route>
        <Route path="user" component={User}/>
    </Route>
)