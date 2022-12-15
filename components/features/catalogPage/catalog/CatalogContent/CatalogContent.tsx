import React from 'react';
import MainFilter from "../../../../UI/Filters/MainFilter/MainFilter";
import SortingPanel from "../../../../UI/SortingPanel/SortingPanel";
import {data} from "../../../../../mocks/products.mock";
import HorizontalProductCard from "../../../../UI/Cards/HorizontalProductCard/HorizontalProductCard";

interface CatalogContentProps {
  isMobile?: boolean;
}

const CatalogContent: React.FC<CatalogContentProps> = ({
  isMobile
}) => {
  return (
    <>

      {!isMobile && (
        <aside className="sticky top-20 basis-1/4 lg:basis-1/5 bg-white shadow-md mr-8 rounded-2xl overflow-hidden">
          <div
            className="overflow-hidden border border-gray-200 rounded"
          >
            <MainFilter/>
          </div>
        </aside>
      )}

      <main className="flex-1">

        {!isMobile && <SortingPanel/>}

        <div className="flex flex-col">

          {data.map((product, key) =>
            <HorizontalProductCard data={product} key={key}/>
          )}

        </div>

      </main>
    </>
  );
};

export {CatalogContent};
