import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { MenuChild, MenuType } from './type';
import { MenuItem } from './MenuItem';
import { renderChildren } from './util';
import { SubMenu } from './Submenu';
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  /** 自定义展开图标 */
  expandIcon?: ReactNode;
  /** 被选中时调用 */
  onSelect?: SelectCallback;
  /** 默认选中菜单索引 */
  defaultIndex?: string;
  children?: MenuChild[] | MenuChild;
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: '0' });
const Menu: FC<MenuProps> = props => {
  const { onSelect, children, defaultIndex } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const handleSelect = (index: string) => {
    setActiveIndex(index);
    onSelect?.(index);
  };
  const context: IMenuContext = {
    index: activeIndex ?? '0',
    onSelect: handleSelect,
  };
  return (
    <ul className="menu">
      <MenuContext.Provider value={context}>
        {renderChildren(children, MenuType.Menu)}
      </MenuContext.Provider>
    </ul>
  );
};
export { Menu, MenuItem, SubMenu };
