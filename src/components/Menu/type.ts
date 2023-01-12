import { ReactNode } from 'react';
export interface MenuItemProps {
  index?: string;
  children?: ReactNode;
}
export type MenuChild = React.FunctionComponentElement<MenuItemProps>;
export enum MenuType {
  Menu,
  SubMenu,
}
