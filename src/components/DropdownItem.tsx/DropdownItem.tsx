import "./DropdownItem.css";

export type AppProps = {
  children?: React.ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const DropdownItem = ({ children, leftIcon, rightIcon }: AppProps) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};
export default DropdownItem;
