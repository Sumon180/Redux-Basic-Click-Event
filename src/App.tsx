import { FC } from "react";
import { Provider } from "react-redux";
import Button from "./components/Button";
import "./App.css";
import store from "./app/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <h1>My App</h1>
      <Button />
    </Provider>
  );
};

export default App;
