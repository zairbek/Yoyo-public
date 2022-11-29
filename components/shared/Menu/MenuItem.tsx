import React from 'react';
import cx from "classnames";

interface MenuItemProps {
  to?: string;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  bordered?: boolean;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  to,
  active,
  disabled,
  bordered,
  icon
}) => {

  return (
    <li className={cx(
      className,
      disabled && 'disabled',
      bordered && 'hover-bordered',
    )}>
      <a
        href={to}
        className={cx(
          active && 'active',
        )}
      >
        {icon}
        {children}
      </a>
    </li>
  );
};

export {MenuItem};
