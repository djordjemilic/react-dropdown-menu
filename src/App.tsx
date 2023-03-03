import "./App.css";
import NavItem from "./components/NavItem/NavItem";
import Navbar from "./components/Navbar/Navbar";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import ArrowIcon from "./assets/icons/arrow.svg";
import BoltIcon from "./assets/icons/bolt.svg";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <Dropdown />
        </NavItem>
      </Navbar>
    </>
  );
}

export default App;
