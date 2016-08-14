import { observable, computed, action } from 'mobx';

class Store {
  @observable authenticated = false;
  @observable user = null;

  @action login(user) {
    this.user = user;
    this.authenticated = true;
  }

  @action logout() {
    this.user = null;
    this.authenticated = false;
  }
};

export { Store };
export default new Store();
