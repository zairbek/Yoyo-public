import React from 'react';
import {Section, SectionDirections} from "../../../../shared/Section";
import {Button} from "../../../../shared/Button";
import {ButtonColors, ButtonSize} from "../../../../shared/Button/Button";
import Heart from "../../../../shared/Icon/Icons/Outline/Heart";
import {data} from "../../../../../mocks/catalogs.mock";

interface TopVerticalCatalogsProps {
  isMobile?: boolean,
}

const TopVerticalCatalogs: React.FC<TopVerticalCatalogsProps> = ({
  isMobile,
}) => {
  return (
    <Section isMobile={isMobile} direction={SectionDirections.Row} className="my-6 overflow-y-auto">
      {data.map((catalog, key) => (
        <Button key={key} size={ButtonSize.sm} beforeIcon={<Heart/>} color={ButtonColors.ghost}>{catalog.name}</Button>
      ))}
    </Section>
  );
};

export default TopVerticalCatalogs;
