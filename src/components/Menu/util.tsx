import React from 'react';
import { MenuChild, MenuType } from './type';
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
export const renderChildren = (children: MenuChild[] | MenuChild, type: MenuType, index?: string) =>
  React.Children.map(toArray(children), (child, i) => {
    if (!child) {
      return;
    }
    const { displayName } = child.type;
    const { validDisplay, error } = TypeMap.get(type);
    const { index } = child?.props || '0';
    if (validDisplay.includes(displayName)) {
      return React.cloneElement(child, { index });
    } else {
      console.error(error);
    }
  });
