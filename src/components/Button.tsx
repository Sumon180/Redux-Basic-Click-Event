import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClicked } from "../features/ButtonSlice";
import { RootState } from "../app/store";

const Button: FC = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state: RootState) => state.button.clicked);

  const handleClick = () => {
    dispatch(buttonClicked());
  };

  return (
    <button onClick={handleClick}>{clicked ? "Clicked!" : "Click me"}</button>
  );
};

export default Button;
