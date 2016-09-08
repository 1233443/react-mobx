import {observable,action,autorun,computed} from "mobx";
/*
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed=false;
console.log("小花"+observableTodoStore.report);
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";
*/



console.log(Object.keys({x:1,y:2}));


class ObservableTodoStore{
	@observable todos=[]; 
	@observable pendingRequests = 0;
	
	
	constructor(){
		autorun(()=>{
			console.log("dfc"+this.report);
		})
	}
	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }
    @computed get report() {
        if (this.todos.length === 0){
            return "空";
        }else{
			return `Next todo: "${this.todos[0].task}". ` + 
			    `Progress: ${this.completedTodosCount}/${this.todos.length}`; 
        }
	}
    
    @action
    delete(id){
    	this.todos.splice(id,1);
    }
    @action
    addTodo(task){
    	this.todos.push({
    		task:task,
    		completed:true,
    		assignee:null
    	});
    }
}
const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore
export {ObservableTodoStore}

