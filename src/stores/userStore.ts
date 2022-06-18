import { action, computed, makeAutoObservable, observable } from 'mobx';
import User from '../models/userModel';
import IUser from '../types/userInterface';
import AppStore from './appStore';

export default class UserStore {
  byId = observable.map<number, User>();

  userName = 'mohit nandkumar shahu';

  constructor(private store: AppStore) {
    makeAutoObservable(this);
  }

  @action load(users: IUser[]) {
    users.forEach((it) => this.byId.set(it.id, new User(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }

  @action changeUserName = (name: string) => {
    this.userName = name;
  };
}
