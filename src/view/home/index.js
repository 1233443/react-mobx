import React,{Component} from 'react';
import ReactDOM from "react-dom";
import {Button} from 'uxcore';
import echarts from "echarts";
import "./style.css";


import Header from "../../components/header";

export default class Home extends Component{
	componentDidMount(){
		var myChart1 = echarts.init(ReactDOM.findDOMNode(this.refs.echarts1));
		var myChart2 = echarts.init(ReactDOM.findDOMNode(this.refs.echarts2));
		myChart1.setOption({
		    title: { text: '用户统计' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});	
		myChart2.setOption({
		    title: { text: '拍卖统计' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});
	}
	render(){
		return (
			<div className="home">
				<Header></Header>
				<div className="content">
					<div className="site-content">
						<div className="echarts" ref="echarts1">aa</div>
						<div className="echarts" ref="echarts2">aa</div>
						<div className="size-right">
							<div className="size-right-box">
								<div className="size-right-title">用户统计</div>
								<div className="size-right-content"><i className="icon statistics-icon"></i>2581</div>
							</div>
							<div className="size-right-box">
								<div className="size-right-title">拍卖统计</div>
								<div className="size-right-content"><i className="icon statistics-icon"></i>2581</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}