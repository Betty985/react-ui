import React, { FC, ReactNode } from 'react';
import { useContext } from 'react';
import { MenuContext } from '.';

export interface MenuItemProps {
  index?: string;
  children?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = props => {
  const { index, children } = props;
  const context = useContext(MenuContext);
  const { onSelect } = context;
  const handleClick = () => {
    onSelect?.(index);
  };
  return <li onClick={handleClick}>{children}</li>;
};
MenuItem.displayName = 'MenuItem';
export { MenuItem };
