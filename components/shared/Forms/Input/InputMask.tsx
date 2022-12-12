import React from 'react';
import classNames from "classnames";
import {InputProps} from "./Input";
import ReactInputMask from "react-input-mask";

interface InputMaskProps extends InputProps{
  mask: string,

  /**
   * Не знаю что за form, нужно выяснить
   */
  form?: any,
}

const InputMask: React.FC<InputMaskProps> = ({
  type,
  name,
  defaultValue,
  placeholder,
  disabled,
  bordered,
  color,
  size,
  mask,
  form,
}) => {
  return (
    <ReactInputMask
      name={name}
      placeholder={placeholder}
      className={classNames(
        "input",
        color,
        size,
        bordered && 'input-bordered',
      )}
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
      {...form}
      mask={mask}
    />
  );
};

export default InputMask;
