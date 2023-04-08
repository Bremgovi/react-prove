import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string; //? tells that the prop is optional
  action?: string;
  onClick?: () => void;
}

const ButtonComponent = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
