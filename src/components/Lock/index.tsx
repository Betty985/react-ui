import React, { FC, cloneElement, useEffect, useState, ReactNode } from 'react';

export enum LockType {
  'PAGE',
  'BUTTON',
  'MENU',
}
interface LockProps {
  children: React.ReactElement;
  type: LockType;
  permissionCheck?: Function;
  ERROR_403?: ReactNode;
}
export const Lock: FC<LockProps> = props => {
  const {
    children,
    type,
    permissionCheck = () => Promise.resolve(true),
    ERROR_403 = <h1>403 您无权访问</h1>,
  } = props;
  const [allowed, setIsAllowed] = useState<boolean>();
  useEffect(() => {
    const check = async () => {
      let res = await permissionCheck();
      setIsAllowed(res);
    };
    check();
  }, []);
  if (allowed) {
    return <>{children}</>;
  } else {
    if (type === LockType.PAGE) {
      return <>{ERROR_403}</>;
    } else if (type === LockType.BUTTON) {
      const newOne = cloneElement(props.children, { disabled: true });
      return <>{newOne}</>;
    } else {
      return <></>;
    }
  }
};
