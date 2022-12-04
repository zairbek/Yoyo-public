import React from 'react';
import Router from "next/router";
import ArrowLeft from "../../../shared/Icon/Icons/Outline/ArrowLeft";
import {Button} from "../../../shared/Button";
import {ButtonColors, ButtonSize} from "../../../shared/Button/Button";

interface MyPageMobileHeaderProps {
  title: string
}

const MyPageMobileHeader: React.FC<MyPageMobileHeaderProps> = ({
  title
}) => {
  return (
    <div className="flex items-center w-full p-3 sticky top-0 z-10 bg-base-200">
      <Button size={ButtonSize.xs} color={ButtonColors.ghost} square onClick={() => Router.back()}>
        <ArrowLeft/>
      </Button>
      <h2 className="text-sm ml-2">
        {title}
      </h2>
    </div>
  );
};

export {MyPageMobileHeader};
