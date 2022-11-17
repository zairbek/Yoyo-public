import React from 'react';
import cx from 'classnames';

export enum Directions {
  Row = 'flex flex-row',
  Col = 'flex flex-col',
}

interface BoxProps {
  className?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
  direction?: Directions
}

const Box: React.FC<BoxProps> = ({
  className,
  children,
  isMobile,
  direction = Directions.Row
}) => {
  return (
    <div className={cx(
      className,
      direction,
      "bg-white shadow-md rounded-2xl p-4 mb-4",
      'gap-4',
      isMobile && 'flex-col'
    )}>
      {children}
    </div>
  );
};

export {Box};
