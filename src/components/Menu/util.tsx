import React from 'react';
import { MenuChild, MenuType } from '.';
const NOT_VALID_MENU_CHILDREN =
  'Warning: Menu has a child which is not a MenuItem component or SubMenu component';
const NOT_VALID_SUBMENU_CHILDREN = 'Warning: Menu has a child which is not a MenuItem component';

const TypeMap = new Map<MenuType, { validDisplay: string[]; error: string }>([
  [
    MenuType.Menu,
    {
      validDisplay: ['MenuItem', 'SubMenu'],
      error: NOT_VALID_MENU_CHILDREN,
    },
  ],
  [
    MenuType.SubMenu,
    {
      validDisplay: ['MenuItem'],
      error: NOT_VALID_SUBMENU_CHILDREN,
    },
  ],
]);
/**
 *
 * @param obj
 * @returns
 */
export const toArray = (obj: unknown) => (Array.isArray(obj) ? obj : [obj]);

/**
 * @description 渲染子元素
 * @param children
 * @param type
 * @param parentIndex
 * @returns
 */
export const renderChildren = (
  children: MenuChild[] | MenuChild,
  type: MenuType,
  parentIndex = '',
) =>
  React.Children.map(toArray(children), (child, index) => {
    const { displayName } = child.type;
    const { validDisplay, error } = TypeMap.get(displayName as unknown as MenuType);
    if (validDisplay.includes(displayName)) {
      const i = type === MenuType.Menu ? index.toString() : `${parentIndex}-${index}`;
      return React.cloneElement(child, { index: i });
    } else {
      console.error(error);
    }
  });
