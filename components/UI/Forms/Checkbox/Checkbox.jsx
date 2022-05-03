import React from 'react';

const Checkbox = ({label, name, checked = false}) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label justify-start gap-x-2">
        <input type="checkbox" name={name}  className="checkbox checkbox-primary checkbox-xs" defaultChecked={checked}/>
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
