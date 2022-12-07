import React from 'react';
import {Input, InputColors, InputProps, InputTypes} from "./Input";
import cx from "classnames";


interface TextFieldProps extends InputProps{
  inputClassName?: string,
  label?: string,
  message?: string,
  error?: boolean
}

const TextField: React.FC<TextFieldProps> = ({
  type = InputTypes.text,
  defaultValue,
  placeholder,
  disabled,
  bordered,
  color,
  size,
  className,
  inputClassName,
  label,
  message,
  error,
}) => {

  if (error) {
    color = InputColors.error
  }

  return (
    <div className={cx("form-control w-full max-w-xs", className)}>
      {label &&
        <label className="label">
          <span className={cx(
            "label-text",
            error && "text-error",
          )}>{label}</span>
          <span className="label-text-alt"/>
        </label>
      }

      <Input type={type} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} bordered={bordered} color={color} size={size} className={inputClassName}/>

      {!! message &&
        <label className="label">
          <span className="label-text-alt"/>
          <span className={cx(
            "label-text-alt",
            error && "text-error",
          )}>{message}</span>
        </label>
      }
    </div>
  );
};

export default TextField;
