import React, { FC, useState, useContext } from 'react';
import { MenuContext } from '.';
import { renderChildren } from './util';
import { MenuChild, MenuType } from './type';
export interface SubMenuProps {
  index: string;
  title: string;
  children?: MenuChild | MenuChild[];
}

const SubMenu: FC<SubMenuProps> = props => {
  const { index, title, children } = props;
  const context = useContext(MenuContext);
  const [isFolded, setFold] = useState(false);
  const { onSelect } = context;
  const handleClick = () => {
    onSelect?.(index);
  };
  return (
    <div key={index} onClick={handleClick}>
      <div className="submenu-title" onClick={() => setFold(i => !i)}>
        {title}
      </div>
      <ul className="submenu">{!isFolded && renderChildren(children, MenuType.Menu, index)}</ul>
    </div>
  );
};
SubMenu.displayName = 'SubMenu';
export { SubMenu };
