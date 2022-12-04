import React from 'react';
import cx from "classnames";

export enum MenuSizes {
  Compact = 'menu-compact',
  Normal = 'menu-normal',
}

interface MenuProps {
  children?: React.ReactNode;
  rounded?: boolean;
  size?: MenuSizes;
  horizontal?: boolean;
  padding?: string;
}

const Menu: React.FC<MenuProps> = ({
  children,
  rounded,
  size = MenuSizes.Normal,
  horizontal,
  padding = 'p-2'
}) => {
  return (
    <ul
      className={cx(
        'menu bg-base-100',
        rounded && 'rounded-box',
        size,
        horizontal && 'menu-horizontal',
        padding,
      )}
    >
      {children}
    </ul>
  );
};

export {Menu};
