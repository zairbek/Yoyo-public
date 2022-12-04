import React from 'react';
import cx from "classnames";

interface DropdownProps {
  label: string|React.ReactNode,
  className?: string,
  labelClassName?: string,
  children?: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  labelClassName,
  label,
  children,
}) => {
  return (
    <div className={cx(
      'dropdown',
      className
    )}>
      <label tabIndex={0} className={cx(
        "btn m-1",
        labelClassName
      )}>
        {label}
      </label>

      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {children}
      </ul>
    </div>
  );
};

export {Dropdown};
