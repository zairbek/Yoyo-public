import React from 'react';
import cx from 'classnames';

export enum BoxDirections {
  Row = 'flex flex-row',
  Col = 'flex flex-col',
}

export enum BoxSizes {
  compact = 'p-4',
  normal = 'p-6',
}

interface BoxProps {
  className?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
  direction?: BoxDirections;
  size?: BoxSizes;
}

const Box: React.FC<BoxProps> = ({
  className,
  children,
  isMobile,
  direction = BoxDirections.Row,
  size = BoxSizes.normal,
}) => {
  return (
    <div className={cx(
      className,
      direction,
      "bg-white shadow-md rounded-2xl mb-4",
      'gap-4',
      isMobile && 'flex-col',
      size
    )}>
      {children}
    </div>
  );
};

export {Box};
