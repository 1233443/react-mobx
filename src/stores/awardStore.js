import { observable, action } from 'mobx';

class AwardStore {
  	@observable me=["aa","bb"];
  	constructor() {
  	}
 	@action 
 	setMe(){
    	this.me = ["xx","yy"];
  	}
}
const awardStore = new AwardStore();

export default awardStore;
export { awardStore };