import React from 'react';
import cx from "classnames";

export enum ButtonColors {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  accent = 'btn-accent',
  ghost = 'btn-ghost',
  link = 'btn-link',
}

export enum ButtonStateColors {
  info = 'btn-info',
  success = 'btn-success',
  warning = 'btn-warning',
  error = 'btn-error',
}

export enum ButtonSize {
  lg = 'btn-lg',
  md = 'btn-md',
  sm = 'btn-sm',
  xs = 'btn-xs',
}

export enum ButtonType {
  submit = 'submit',
}

interface ButtonProps {
  children?: React.ReactNode
  color?: ButtonColors
  stateColor?: ButtonStateColors
  active?: boolean
  outline?: boolean
  size?: ButtonSize
  responsive?: boolean,
  wide?: boolean,
  glass?: boolean,
  disabled?: boolean,
  square?: boolean,
  circle?: boolean,
  afterIcon?: React.ReactNode,
  beforeIcon?: React.ReactNode,
  block?: boolean,
  loading?: boolean,
  type?: ButtonType,
  onClick?: () => void,
}

const responsiveSize = (state: boolean): string => {
  if (! state) {
    return ''
  }
  return `${ButtonSize.xs} sm:${ButtonSize.sm} md:${ButtonSize.md} lg:${ButtonSize.lg}`
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  stateColor,
  active,
  outline,
  size = ButtonSize.md,
  responsive,
  wide,
  glass,
  disabled,
  square,
  circle,
  afterIcon,
  beforeIcon,
  block,
  loading,
  type = ButtonType.submit,
  onClick,
  }) => {
  return (
    <button
      className={cx(
        'btn normal-case',
        color,
        stateColor,
        active && 'btn-active',
        outline && 'btn-outline',
        size,
        responsiveSize(!! responsive),
        wide && 'btn-wide',
        glass && 'glass',
        square && 'btn-square',
        circle && 'btn-circle',
        (afterIcon || beforeIcon) && 'gap-2',
        block && 'btn-block',
        loading && 'loading',
        type,
        onClick,
      )}
      disabled={disabled}
    >
      {beforeIcon}
      {children}
      {afterIcon}
    </button>
  );
};

export {Button};
