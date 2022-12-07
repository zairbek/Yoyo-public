import React from 'react';
import cx from "classnames";

export enum InputTypes {
  text = 'text',
}

export enum InputColors {
  ghost = "input-ghost",
  primary = 'input-bordered input-primary',
  secondary = 'input-bordered input-secondary',
  accent = 'input-bordered input-accent',
  info = 'input-bordered input-info',
  success = 'input-bordered input-success',
  warning = 'input-bordered input-warning',
  error = 'input-bordered input-error',
}

export enum InputSizes {
  xs = 'input-xs',
  sm = 'input-sm',
  md = 'input-md',
  lg = 'input-lg',
}

export interface InputProps {
  type?: InputTypes,
  defaultValue?: string,
  placeholder?: string,
  disabled?: boolean,
  bordered?: boolean,
  color?: InputColors,
  size?: InputSizes,
  className?: string,
}

const Input: React.FC<InputProps> = ({
  type = InputTypes.text,
  defaultValue,
  placeholder,
  disabled,
  bordered,
  color,
  size,
  className,

}) => {
  return (
    <input
      type={type} placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      className={cx(
        "input",
        bordered && 'input-bordered',
        color,
        size,
        className,
      )}
    />
  );
};

export {Input};
