import React, {useState} from 'react';
import dynamic from "next/dynamic";
import PhoneSignInTab from "./PhoneSignInTab";
import ConfirmPhoneSignInTab from "./ConfirmPhoneSignInTab";
import EmailSignInTab from "./EmailSignInTab";
import ConfirmEmailSignInTab from "./ConfirmEmailSignInTab";

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false });

const MobileIndex: React.FC = () => {
  const [isOpen, togglePopup] = useState(false);
  const [currentTab, setCurrentTab] = useState<"phoneLogin" | "emailLogin" | "confirmPhoneLogin" | "confirmEmailLogin">('phoneLogin');
  const [data, setData] = useState({phone: '', email: ''});

  return (
    <>
      <button className="btn btn-primary normal-case" onClick={() => togglePopup(true)}>Войти или зарегистрироватся</button>

      <Popup
        modal
        open={isOpen}
        closeOnDocumentClick
        onClose={() => togglePopup(false)}
        contentStyle={{
          width: '100%',
          height: '100vh'
      }}
      >

        <div className="card card-compact bg-base-100 h-full w-full p-6 relative justify-center">
          <button type="button" className="btn btn-ghost btn-circle absolute top-2 right-2" onClick={() => togglePopup(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>


          {currentTab === 'phoneLogin' &&
            <PhoneSignInTab
              toEmailTab={() => setCurrentTab('emailLogin')}
              toConfirmCodeTab={(phone) => {
                setData({phone: phone})
                setCurrentTab('confirmPhoneLogin')
              }}
            />
          }
          {currentTab === 'confirmPhoneLogin' &&
            <ConfirmPhoneSignInTab
              phone={data.phone}
              onBack={() => setCurrentTab('phoneLogin')}
            />
          }

          {currentTab === 'emailLogin' &&
            <EmailSignInTab
              onBack={() => setCurrentTab('phoneLogin')}
              toConfirmCodeTab={(email) => {
                setData({email: email})
                setCurrentTab('confirmEmailLogin')
              }}
            />
          }
          {currentTab === 'confirmEmailLogin' &&
            <ConfirmEmailSignInTab
              email={data.email}
              onBack={() => setCurrentTab('emailLogin')}
            />
          }

        </div>
      </Popup>
    </>
  );
};

export default MobileIndex;
