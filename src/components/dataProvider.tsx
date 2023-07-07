import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../app/store";

interface dataProviderPropes {
  children: ReactNode;
}

const DataProvider: FC<dataProviderPropes> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
