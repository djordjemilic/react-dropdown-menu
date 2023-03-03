import "./Dropdown.css";
import DropdownItem from "../DropdownItem.tsx/DropdownItem";
import { ReactComponent as CogIcon } from "../../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary">
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
