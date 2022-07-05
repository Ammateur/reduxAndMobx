import React from "react";
import "./MenuItem.scoped.less";
import { MenuItemType } from "components/Header/types";
import { DownOutlined } from "@ant-design/icons";
interface IProps {
  isActive: boolean;
  menuInfo: MenuItemType;
  onClick: (url: string) => void;
}

const MenuItem = (props: IProps) => {
  return (
    <div className="menu-item-wrapper">
      <div
        className="menu-item-title"
        onClick={() => props.onClick(props.menuInfo.url)}
      >
        {props.menuInfo.name}
      </div>
      {props.menuInfo.menuChildren.length > 0 && (
        <DownOutlined className="down-icon" />
      )}
      <div className="bottom-line current-hover"></div>
      {props.isActive && <div className="bottom-line"></div>}
      <div className="menu-children-list">
        {props.menuInfo.menuChildren.map((item, index) => {
          return (
            <div
              className="childrenItem"
              key={`childrenItem${index}`}
              onClick={() => props.onClick(item.url)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuItem;
