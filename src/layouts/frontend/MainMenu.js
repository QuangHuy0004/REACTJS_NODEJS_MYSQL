import React, { useEffect, useState } from "react";
import MainMenuItem from "./MainMenuItem";
import MenuService from "../../services/MenuServices";

const MainMenu = () => {

  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await MenuService.mainmenu(0, 10);
      setMenus(result.menus);
    })();
  }, []);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <nav className="header__menu mobile-menu">
            <ul className="navbar-nav me-auto ">
                {menus && menus.length > 0 && menus.map((menu, index) => {
                    return (
                        <MainMenuItem key={index} menu={menu} />
                    )
                })}
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
