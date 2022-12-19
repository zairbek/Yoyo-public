import React from 'react';
import {Section, SectionDirections} from "../../../../shared/Section";
import {Button} from "../../../../shared/Button";
import {ButtonColors, ButtonSize} from "../../../../shared/Button/Button";
import Heart from "../../../../shared/Icon/Icons/Outline/Heart";
import {data} from "../../../../../mocks/catalogs.mock";
import cx from "classnames";

interface TopVerticalCatalogsProps {
  isMobile?: boolean,
}

const TopVerticalCatalogs: React.FC<TopVerticalCatalogsProps> = ({
  isMobile,
}) => {
  return (
    <Section isMobile={isMobile} direction={SectionDirections.Row} className={cx(
      "overflow-y-auto",
      isMobile ? 'py-2 mt-4' : 'py-3 mt-3'
    )}>
      {data.map((catalog, key) => (
        <Button key={key} size={ButtonSize.sm} beforeIcon={<Heart/>} color={ButtonColors.ghost}>{catalog.name}</Button>
      ))}
    </Section>
  );
};

export default TopVerticalCatalogs;
