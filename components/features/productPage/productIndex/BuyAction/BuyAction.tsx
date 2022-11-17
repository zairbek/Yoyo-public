import React from 'react';

interface BuyActionProps {
  product: object
}

const BuyAction: React.FC<BuyActionProps> = ({product}) => {
  return (
    <div className="shadow-lg rounded-2xl w-full bg-white p-4">
      <p className="text-gray-800 text-xl font-medium mb-4">{product.title}</p>
      <p className="text-gray-900 text-3xl font-bold">{product.price}</p>
      <p className="text-gray-600 text-xs mt-4">For most businesses that want to optimize web queries.</p>
      <div className="divider"/>
      <div className="flex gap-x-2">
        <button type="button" className="btn btn-primary grow">В корзину</button>
        <button type="button" className="btn btn-outline hover:btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export {BuyAction};
