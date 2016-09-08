import React,{Component} from 'react';
import {Button} from 'uxcore';
import Header from "../../components/header";
import NavLink from '../../components/navlink';

export default class Operate extends Component{
	render(){
		return (
			<div className="operate">
				<Header></Header>
				<div className="content">
					<div className="site-aside">
						<h3 className="site-aside-name"><i className="kuma-icon kuma-icon-member"></i>推送管理</h3>
						<ul>
							<li><NavLink to="operate/propelling/list/1"><small>推送列表</small></NavLink></li>
							<li><NavLink to="operate/propelling/add"><small>添加推送</small></NavLink></li>
						</ul>
						<h3 className="site-aside-name"><i className="kuma-icon kuma-icon-member"></i>发奖管理</h3>
						<ul>
							<li><NavLink to="operate/award/list/1"><small></small>发奖记录</NavLink></li>
							<li><NavLink to="operate/award/add"><small></small>添加推送</NavLink></li>
						</ul>
					</div>
					<div className="site-content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}