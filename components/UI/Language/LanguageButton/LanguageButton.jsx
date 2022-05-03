import React from 'react';

const LanguageButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><g fillRule="evenodd" strokeWidth="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0039a6" d="M0 160.003h640V480H0z"/><path fill="#d52b1e" d="M0 319.997h640V480H0z"/></g></svg>
      </label>
      <div tabIndex="0" className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info-content">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageButton;
