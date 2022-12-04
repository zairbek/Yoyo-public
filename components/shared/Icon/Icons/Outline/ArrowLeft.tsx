import React from 'react';
import {IconProps, IconSizes} from "../../index";
import cx from "classnames";

enum CurrencyCode {
  usd = 'usd',
}

interface CurrencyProps extends IconProps {
  currency?: CurrencyCode
}

const Currency: React.FC<CurrencyProps> = ({
  size = IconSizes.medium
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cx(size)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
};

export default Currency;
