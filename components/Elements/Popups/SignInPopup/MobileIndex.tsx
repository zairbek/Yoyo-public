import React, {useState} from 'react';
import dynamic from "next/dynamic";
import SignInTab from "./SignInTab";
import RegisterTab from "./RegisterTab";

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false });

const MobileIndex: React.FC = () => {
  const [isOpen, togglePopup] = useState(false);
  const [currentTab, setCurrentTab] = useState<"phoneLogin" | "emailLogin">('phoneLogin');

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

          {currentTab === 'phoneLogin' && <SignInTab emailLogin={() => setCurrentTab('emailLogin')}/>}
          {currentTab === 'emailLogin' && <RegisterTab onBack={() => setCurrentTab('phoneLogin')}/>}

        </div>
      </Popup>
    </>
  );
};

export default MobileIndex;
