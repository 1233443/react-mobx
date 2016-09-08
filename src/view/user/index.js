import React,{Component} from 'react';
import {Button} from 'uxcore';
import Header from "../../components/header";
export default class User extends Component{
	render(){
		return (
			<div className="user">
				<Header></Header>
				<div className="content">
					<div className="site-aside">
						<h3 className="site-aside-name"><i className="kuma-icon kuma-icon-member"></i>用户管理</h3>
						<ul>
							<li className="current"><a href="javascript:;"><small>用户列表</small></a></li>
							<li><a href="javascript:;"><small>添加用户</small></a></li>
						</ul>
						
						<h3 className="site-aside-name"><i className="kuma-icon kuma-icon-member"></i>商家管理</h3>
					</div>
					<div className="site-content">
						<h2 className="site-navbar-title"> <i className="kuma-icon kuma-icon-yingyong"></i>首页</h2>
						<div className="site-box">
							<div className="site-box-content">
								阿达撒发大水了阿达撒发大水了阿达撒发大水了阿达撒发大水了阿达撒发大水了
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}