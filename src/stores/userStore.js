import { observable, action } from 'mobx';

class UserStore {

  @observable me;
  constructor() {
    this.me = null;
  }
  
  @action 
  setMe = (me) => {
    this.me = "aaa";
  }

}

const userStore = new UserStore();

export default userStore;
export { UserStore };