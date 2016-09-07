import React from 'react';
import ReactDOM from "react-dom";
import { observer, inject } from 'mobx-react';


import userStore from '../../stores/userStore';
import trackStore from '../../stores/trackStore';
import ObservableTodoStore from '../../stores/todoStore';

@observer
class StreamContainer extends React.Component{
	componentWillMount() {
	}
	add(){
		var value=ReactDOM.findDOMNode(this.refs.text).value;
		ObservableTodoStore.addTodo(value);
	}
	delete(id){
			ObservableTodoStore.delete(id);
	}
	render(){
		return (
			<div>
					<input type="text" ref="text" />
					<button onClick={this.add.bind(this)}>添加</button>
					<ul>
						{
							ObservableTodoStore.todos.map((item,index)=>{
								return <li key={index} onClick={this.delete.bind(this,index)}>{item.task}</li>
							})
						}
					</ul>
			</div>
		)
	}
}

export default StreamContainer;