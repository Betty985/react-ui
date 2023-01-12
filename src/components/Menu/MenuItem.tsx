import React, { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '.';
export interface MenuItemProps {
  index: string;
  children?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = props => {
  const { index, children } = props;
  const context = useContext(MenuContext);
  console.log(context.index);
  const classses = classNames('menu-item', { 'menu-item-selected': context.index === index });
  const { onSelect } = context;
  const handleClick: React.MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    onSelect?.(index);
  };
  return (
    <li className={classses} key={index} onClick={handleClick}>
      <span className="menu-title-content">{children}</span>
    </li>
  );
};
MenuItem.displayName = 'MenuItem';
export { MenuItem };
