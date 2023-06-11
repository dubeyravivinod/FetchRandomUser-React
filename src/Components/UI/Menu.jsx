import classess from "./Menu.module.css";
import { useState } from "react";

const Menu = (props) => {
  const [opt, setOpt] = useState("");

  const MenuHandler = (event) => {
    setOpt(event.target.id);
    props.onSelectedMenu(opt);
  };

  return (
    <div className={classess.menu}>
      <ul className={classess.ul_menu}>
        <li className={classess.li_menu} id="Home" onClick={MenuHandler}>
          Home
        </li>
        <li className={classess.li_menu} id="Products" onClick={MenuHandler}>
          Products
        </li>
        <li className={classess.li_menu} id="Users" onClick={MenuHandler}>
          Users
        </li>
        <li className={classess.li_menu} id="Contact" onClick={MenuHandler}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Menu;
