import AppStore from "../stores/appStore";
import IUser from "../types/userInterface";

export default class User implements IUser {

  id: number;
  name: string;
  username: string;
  email: string;

  constructor(private store: AppStore, user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
  }
}
