import React,{Component} from 'react';
import {Button} from 'uxcore';


class App extends Component{
	render(){
		return (
			<div>
				{this.props.children}
			</div>
			
		)
	}
}
export default App;