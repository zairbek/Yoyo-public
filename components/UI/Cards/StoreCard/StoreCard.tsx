import React from 'react';
import Link from "next/link";

interface StoreCardProps {
  store?: number
}

const StoreCard: React.FC<StoreCardProps> = ({store}) => {
  return (
    <div className="card card-compact w-full md:w-[47%] lg:w-[31%] 2xl:w-[23%] bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
      <div className="card-body">
        <Link href="/my/stores/cross/">
          <a>
            <h2 className="card-title text-md md:text-xl">
              Крассовки
            </h2>
          </a>
        </Link>
        <p className="text-xs md:text-sm">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/my/stores/cross/detail/">
            <a>
              <button className="btn btn-xs xl:btn-sm btn-outline lg:btn-ghost normal-case">
                <span>Параметры</span>
              </button>
            </a>
          </Link>
          <Link href="/my/stores/cross/">
            <a>
              <button className="btn btn-xs xl:btn-sm btn-primary normal-case">
                <span>Посмотреть</span>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
