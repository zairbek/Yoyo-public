import React from 'react';

const RadioButton = ({label, name}) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label justify-start gap-x-2">
        <input type="radio" name={name} className="radio radio-primary radio-xs" defaultChecked={true}/>
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;
