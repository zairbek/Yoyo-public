import React from 'react';
import cx from 'classnames';

interface DividerProps {
  invisible?: boolean;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  invisible,
  className
}) => {
  return (
    <div className={cx(
      "divider",
      invisible && 'before:bg-transparent after:bg-transparent',
      className,
    )}/>
  );
};
