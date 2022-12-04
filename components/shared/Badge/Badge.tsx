import React from 'react';
import cx from "classnames";

export enum BadgeColors {
  neutral = '',
  primary = 'badge-primary',
  secondary = 'badge-secondary',
  accent = 'badge-accent',
  ghost = 'badge-ghost',
}

export enum BadgeSizes {
  lg = 'badge-lg',
  md = 'badge-md',
  sm = 'badge-sm',
  xs = 'badge-xs',
}

interface BadgeProps {
  children: React.ReactNode,
  color?: BadgeColors
  outline?: boolean
  size?: BadgeSizes
}

const Badge: React.FC<BadgeProps> = ({
  children,
  color= BadgeColors.primary,
  outline,
  size
}) => {
  return (
    <span className={cx(
      'badge',
      color,
      outline && 'badge-outline',
      size,
    )}>
      {children}
    </span>
  );
};

export {Badge};
