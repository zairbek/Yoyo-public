import React from 'react';
import cx from "classnames";

interface MenuTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const MenuTitle: React.FC<MenuTitleProps> = ({
  children,
  className,
}) => {
  return (
    <li className={cx(className, "menu-title")}>
      <span>{children}</span>
    </li>
  );
};

export {MenuTitle};
