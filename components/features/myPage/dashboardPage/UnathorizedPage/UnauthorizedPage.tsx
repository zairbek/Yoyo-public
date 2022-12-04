import React from 'react';
import {Section} from "../../../../shared/Section";
import {Box} from "../../../../shared/Box";
import {BoxDirections, BoxSizes} from "../../../../shared/Box/Box";
import MobileSignInIndex from "../../../../Elements/Popups/SignInPopup/MobileIndex";
import {ApplicationMenu} from "../ApplicationMenu";

interface UnauthorizedPageProps {
  isMobile: boolean
}

const UnauthorizedPage: React.FC<UnauthorizedPageProps> = ({
  isMobile
}) => {
  return (
    <>
      <Section isMobile={isMobile} className="pb-20">

        <Box isMobile={isMobile} size={BoxSizes.compact} className="px-6 py-8" direction={BoxDirections.Col}>
          <h2 className="text-bold text-2xl mb-2">Войдите или зарегистрируйтесь</h2>
          <p className="text-sm mb-2">Чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и
            баллами.</p>

          <div>
            <MobileSignInIndex/>
          </div>
        </Box>


        <Box isMobile={isMobile} size={BoxSizes.compact} direction={BoxDirections.Col}>
          <ApplicationMenu/>
        </Box>
      </Section>
    </>
  );
};

export {UnauthorizedPage};
