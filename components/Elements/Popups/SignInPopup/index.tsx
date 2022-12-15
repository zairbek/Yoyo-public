import React, {useState} from 'react';
import dynamic from "next/dynamic";
import PhoneSignInTab from "./PhoneSignInTab";
import EmailSignInTab from "./EmailSignInTab";
import ConfirmPhoneSignInTab from "./ConfirmPhoneSignInTab";
import ConfirmEmailSignInTab from "./ConfirmEmailSignInTab";
import UserCircle from "../../../shared/Icon/Icons/Outline/UserCircle";
import {IconSizes} from "../../../shared/Icon";

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false });

const SignInPopupIndex = () => {
  const [isOpen, togglePopup] = useState(false);
  const [currentTab, setCurrentTab] = useState<"phoneLogin" | "emailLogin" | "confirmPhoneLogin" | "confirmEmailLogin">('phoneLogin');
  const [phoneState, setPhone] = useState('');
  const [emailState, setEmail] = useState('');

  return (
    <>
      <button className="btn btn-ghost btn-circle avatar" onClick={() => togglePopup(true)}>
        <UserCircle size={IconSizes.mediumBig}/>
      </button>

      <Popup modal open={isOpen} closeOnDocumentClick onClose={() => togglePopup(false)}>

        <div className="card card-compact bg-base-100 w-[24rem] p-6 sm:p-10 relative">
          <button type="button" className="btn btn-ghost btn-circle absolute top-2 right-2" onClick={() => togglePopup(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {currentTab === 'phoneLogin' &&
            <PhoneSignInTab
              toEmailTab={() => setCurrentTab('emailLogin')}
              toConfirmCodeTab={(phone) => {
                setPhone(phone)
                setCurrentTab('confirmPhoneLogin')
              }}
            />
          }
          {currentTab === 'confirmPhoneLogin' &&
            <ConfirmPhoneSignInTab
              phone={phoneState}
              onBack={() => setCurrentTab('phoneLogin')}
            />
          }

          {currentTab === 'emailLogin' &&
            <EmailSignInTab
              onBack={() => setCurrentTab('phoneLogin')}
              toConfirmCodeTab={(email) => {
                setEmail(email)
                setCurrentTab('confirmEmailLogin')
              }}
            />
          }
          {currentTab === 'confirmEmailLogin' &&
            <ConfirmEmailSignInTab
              email={emailState}
              onBack={() => setCurrentTab('emailLogin')}
            />
          }

        </div>
      </Popup>
    </>
  );
};

export default SignInPopupIndex;
