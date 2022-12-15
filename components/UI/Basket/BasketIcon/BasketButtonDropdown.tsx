import React from 'react';
import ShoppingCart from "../../../shared/Icon/Icons/Outline/ShoppingCart";
import {IconSizes} from "../../../shared/Icon";

const BasketButtonDropdown: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <ShoppingCart size={IconSizes.mediumBig}/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
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

export default BasketButtonDropdown;
