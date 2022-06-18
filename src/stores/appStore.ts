import UserStore from './userStore';

export default class AppStore {
  user = new UserStore(this);
}
