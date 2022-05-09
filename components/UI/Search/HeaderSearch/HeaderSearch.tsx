import React from 'react';
import classNames from "classnames";

interface HeaderSearchProps {
  hideCategory?: boolean;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  hideCategory = false
}) => {
  return (
    <div className="form-control w-full">
      <div className="input-group">
        {!hideCategory &&
          <select className="select select-bordered w-32">
            <option defaultValue="">Везде</option>
            <option>Авто</option>
            <option>Личние вещи</option>
          </select>
        }

        <input type="text" placeholder="Search" className={classNames(
          "input w-full input-bordered",
          hideCategory && 'input-sm'
          )}/>
        <button className={classNames(
          "btn btn-square",
          hideCategory && 'btn-sm'
        )}>
          <svg className={classNames(hideCategory ? 'h-4 w-4' : "h-6 w-6")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
