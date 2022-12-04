import React from 'react';
import cx from "classnames";
import Link from "next/link";
import {Badge} from "../Badge";

interface MenuItemProps {
  to?: string;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  bordered?: boolean;
  icon?: React.ReactNode;
  endElement?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  to,
  active,
  disabled,
  bordered,
  icon,
  endElement,
}) => {

  const a = (
    <a
      href={to}
      className={cx(
        'flex justify-between',
        active && 'active',
        )}
    >
      <span className="flex gap-2">
        {icon}
        {children}
      </span>

      {endElement}
    </a>
  )

  return (<li className={cx(className, disabled && 'disabled', bordered && 'hover-bordered',)}>

    {to ?
      (<Link href={to}>
        {a}
      </Link>)
      : a
    }


    </li>);
};

export {MenuItem};
