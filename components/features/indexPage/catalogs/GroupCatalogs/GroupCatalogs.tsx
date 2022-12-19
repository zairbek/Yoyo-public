import React from 'react';
import {Section, SectionDirections} from "../../../../shared/Section";
import {Box} from "../../../../shared/Box";
import cx from "classnames";
import {BoxDirections, BoxSizes} from "../../../../shared/Box/Box";
import Link from "next/link";
import {data as discountProducts} from "../../../../../mocks/products.mock";
import {GroupedCatalog} from "../../../../../utils/interfaces/catalog/catalog";

interface GroupCatalogs4Props {
  data: Array<GroupedCatalog>,
  isMobile?: boolean,
}

const GroupCatalogs: React.FC<GroupCatalogs4Props> = ({
  data,
  isMobile,
}) => {
  const elementCount = data.length

  return (
    <Section isMobile={isMobile} direction={SectionDirections.Row} className="flex-wrap">
      {data.map((item, key) => (
        <Box
          key={key}
          shadow={false}
          invisible
          className={cx(
            "h-40 md:h-64 gap-x-2 mb-0",
            elementCount === 1
              ? 'w-full'
              : isMobile
                ? 'w-1/' + (elementCount === 2 ? elementCount : Math.ceil(elementCount / 2))
                : `w-1/${elementCount}`
          )}
          direction={BoxDirections.Col}
          size={BoxSizes.compact}
        >
          <Link href='/to'>
            <a className="w-full h-full">
               {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src={discountProducts[0].images[0].src} className="w-full h-full object-cover rounded-xl" alt={discountProducts[0].title}/>
            </a>
          </Link>
        </Box>
      ))}
    </Section>
  );
};

export default GroupCatalogs;
