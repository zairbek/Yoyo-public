import React from 'react';

const CountrySelectButton = () => {
  return (
    <div className="dropdown dropdown-start">
      <label tabIndex="0" className="btn btn-ghost flex-nowrap gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Москва
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

export default CountrySelectButton;
