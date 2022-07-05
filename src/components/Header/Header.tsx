import React from "react";
import "./Header.scoped.less";
import { MENU_INDEX_CONFIG } from "@/common/constant/menuConfig";
import MenuItem from "components/Header/MenuItem/MenuItem";
import { UserOutlined } from "@ant-design/icons";
const CustomHeader = () => {
  const navigateTo = (url: string) => {
    console.log(url);
  };
  return (
    <div className="header-component-box">
      <section className="left">
        <div className="logo"></div>
        <div className="menu-list">
          {MENU_INDEX_CONFIG.map((item, index) => {
            return (
              <MenuItem
                key={`menuIndex-${index}`}
                isActive={item.isActive}
                menuInfo={item}
                onClick={navigateTo}
              />
            );
          })}
        </div>
      </section>
      <section className="user-info">
        <UserOutlined />
        <span className="username">ammaxc</span>
      </section>
    </div>
  );
};
export default CustomHeader;
