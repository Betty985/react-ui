import React, { FC, useState } from 'react';
import { useContext } from 'react';
import { MenuContext, MenuChild, MenuType } from '.';
import { renderChildren } from './util';
export interface SubMenuProps {
  index?: string;
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
    <li key={index} onClick={handleClick}>
      <div onClick={() => setFold(i => !i)}>{title}</div>
      <div>{!isFolded && renderChildren(children, MenuType.SubMenu, index)}</div>
    </li>
  );
};
export { SubMenu };
