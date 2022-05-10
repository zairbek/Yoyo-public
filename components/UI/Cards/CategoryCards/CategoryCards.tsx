import React from 'react';
import classNames from "classnames";

const CategoryCards: React.FC = () => {
  return (
    <ul className={classNames(
      "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
      "gap-4 justify-items-center text-center",
    )}>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
      <li>
        <div className="p-2 md:p-6 rounded-lg bg-base-100 mb-4">
          <img src="https://api.lorem.space/image/watch?w=120&h=120"/>
        </div>
        <p>Категория</p>
      </li>
    </ul>
  );
};

export default CategoryCards;
