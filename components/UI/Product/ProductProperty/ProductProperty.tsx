import React from 'react';
import classNames from "classnames";

interface ProductPropertyProps {
  name: string;
  value: number|string;
}

const ProductProperty: React.FC<ProductPropertyProps> = ({name, value}) => {
  return (
    <dl className="flex items-end gap-x-2 w-full mb-2">
      <dt
        className={classNames(
          "basis-1/2 text-gray-500 relative",
          "before:border-b-[1px] before:border-dotted before:w-full before:block before:absolute before:bottom-[.2rem] before:left-0 before:content-[''] before:border-gray-300"
        )}
      >
        <span className="bg-white relative">{name}</span>
      </dt>
      <dd className="basis-1/2">{value}</dd>
    </dl>
  );
};

export default ProductProperty;
