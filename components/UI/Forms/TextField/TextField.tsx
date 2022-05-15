import React from 'react';
import classNames from "classnames";
import InputMask from "react-input-mask";

enum Size {
  xs = 'input-xs',
  sm = 'input-sm',
  md = 'input-md',
  lg = 'input-lg',
}

type SizeStrings = keyof typeof Size;

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  size?: SizeStrings;
  error?: boolean;
  message?: string;
  border?: boolean;
  ghost?: boolean;
  form?: any;
  mask?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  size= 'md',
  error,
  message,
  border = true,
  ghost,
  form,
  mask,
}) => {

  return (
    <div className="form-control w-full max-w-xs">

      {label &&
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt"/>
        </label>
      }

      {!mask
        ?
          <input
            name={name}
            placeholder={placeholder}
            className={classNames(
              "input w-full max-w-xs",
              Size[size],
              error && 'input-error',
              border && 'input-bordered',
              ghost && 'input-ghost',
            )}
            {...form}
          />
        :
          <InputMask
            name={name}
            placeholder={placeholder}
            className={classNames(
              "input w-full max-w-xs",
              Size[size],
              error && 'input-error',
              border && 'input-bordered',
              ghost && 'input-ghost',
            )}
            {...form}
            mask={mask}
          />
      }


      {!!message &&
        <label className="label">
          <span className="label-text-alt"/>
          <span className={classNames(
            "label-text-alt",
            error && "text-error",
          )}>{message}</span>
        </label>
      }
    </div>
  );
};

export default TextField;
