import React,{Component} from "react";
import {observer,inject} from 'mobx-react';
import awardStore from '../../../../stores/awardStore';


@observer
export default class AwardList extends Component{
	show(){
		awardStore.setMe();
		console.log(awardStore.me);
	}
	render(){
		return (
			<div>
				<h2 className="site-navbar-title"> <i className="kuma-icon kuma-icon-yingyong"></i>发奖记录</h2>
				<div className="site-box">
					<div className="site-box-content">
						<button onClick={this.show.bind(this)}>按钮</button>
						{awardStore.me.map((item,index)=>{
							return <span key={index}>{item}</span>
						})}
					</div>
				</div>
			</div>
		)
	}
}
