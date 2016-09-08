import React,{Component} from "react"
import {Link} from "react-router"
import "./style.css"
import NavLink from '../navlink'

export default class Header extends Component{
	render(){
		return (
			<header>
				<ul>
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/operate">操作</NavLink></li>
					<li><NavLink to="/user">用户</NavLink></li>
					<li><a href="javascript:;">集市</a></li>
					<li><a href="javascript:;">社群</a></li>
					<li><a href="javascript:;">统计</a></li>
					<li><a href="javascript:;">设置</a></li>
					<li><a href="javascript:;">其他</a></li>
				</ul>
			</header>
		)
	}
}
