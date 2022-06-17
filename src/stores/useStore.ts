import React, { useContext } from "react";
import AppApi from "../apis/appApi";
import AppStore from "./appStore";

interface AppContextType {
  store: AppStore;
  api: AppApi;
}

const AppContext = React.createContext<null | AppContextType>(null);

export const useStore = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};

export default AppContext;