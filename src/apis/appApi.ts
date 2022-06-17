import axios from "axios";
import AppStore from "../stores/appStore";
import UserApi from "./userApi";

export default class AppApi {

  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user: UserApi;

  constructor(store: AppStore) {
    this.user = new UserApi(this, store);
  }
}