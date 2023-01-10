import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { MenuItemProps, MenuItem } from './Item';
type SelectCallback = (selectedIndex: string) => void;
type MenuChild = React.FunctionComponentElement<MenuItemProps>;
const toArray = obj => (Array.isArray(obj) ? obj : [obj]);
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
const renderChildren = (children: React.FunctionComponentElement<MenuItemProps>[]) =>
  React.Children.map(children, (child, index) => {
    const { displayName } = child.type;
    if (displayName === 'MenuItem' || displayName === 'SubMenu') {
      return React.cloneElement(child, { index: index.toString() });
    } else {
      console.error('Warning: Menu has a child which is not a MenuItem component');
    }
  });
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
    <ul>
      <MenuContext.Provider value={context}>
        {renderChildren(toArray(children))}
      </MenuContext.Provider>
    </ul>
  );
};
export { Menu, MenuItem };
