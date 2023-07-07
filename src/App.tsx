import { FC } from "react";
import Button from "./components/Button";
import Counter from "./pages/Counter";
import DataProvider from "./components/dataProvider";

const App: FC = () => {
  return (
    <DataProvider>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" mb-56">My Redux-React App</h1>
        <Button />
        <Counter />
      </div>
    </DataProvider>
  );
};

export default App;
