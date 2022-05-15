import React from 'react';
import classNames from "classnames";

enum Size {
  xs = 'btn-xs',
  sm = 'btn-sm',
  md = '',
  lg = 'btn-lg',
}

type SizeStrings = keyof typeof Size;

enum Variant {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  accent = 'btn-accent',
  ghost = 'btn-ghost',
  info = 'btn-info',
  success = 'btn-success',
  warning = 'btn-warning',
  error = 'btn-error',
}

type VariantStrings = keyof typeof Variant;

enum Shape {
  primary = 'btn-square',
  secondary = 'btn-circle',
}

type ShapeStrings = keyof typeof Shape;

interface ButtonProp {
  className?: string;
  children: React.ReactElement;
  size?: SizeStrings;
  variant?: VariantStrings;
  active?: boolean;
  outline?: boolean;
  disabled?: boolean;
  shape?: ShapeStrings;
  block?: boolean;
  loading?: boolean;
  type?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  link?: boolean;
  onClick?: void;
}

const Button: React.FC<ButtonProp> = ({
  className,
  children,
  size = 'md',
  variant,
  active,
  outline,
  disabled,
  shape,
  block,
  loading,
  type= 'submit',
  startIcon,
  endIcon,
  link,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'btn normal-case',
        className,
        Size[size],
        variant && Variant[variant],
        active && "btn-active",
        outline && "btn-outline",
        block && "btn-block",
        shape && Shape[shape],
        loading && "loading",
        startIcon || endIcon ? "gap-2" : "",
        link && 'btn-link',
        )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {!!startIcon && startIcon}
      {children}
      {!!endIcon && endIcon}
    </button>
  );
};

export default Button;
