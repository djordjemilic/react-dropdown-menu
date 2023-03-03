import { useState } from "react";
import "./NavItem.css";

type AppProps = {
  icon?: JSX.Element;
  children?: React.ReactNode;
};

const NavItem = ({ icon, children }: AppProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
};

export default NavItem;
