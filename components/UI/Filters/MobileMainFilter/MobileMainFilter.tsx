import React, {useState} from 'react';

import {options} from "../../SortingPanel/SortingPanel";
import MainFilter from "../MainFilter/MainFilter";
import Popup from "../../Popups/Popup";

const MobileMainFilter: React.FC = () => {
  const [isOpen, togglePopup] = useState(false);

  return (
    <>
      <div className="flex container mx-auto justify-between px-4 py-2 sticky top-12 z-20 bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
        </button>
        <select className="select select-xs select-bordered">
          {options.map(option =>
            <option key={option.id} value={option.value}>{option.name}</option>
          )}
        </select>
        <button onClick={() => togglePopup(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
        </button>
      </div>

      <Popup.Content
        isOpen={isOpen}
        togglePopup={togglePopup}
      >
        <div className="w-full h-full overflow-y-auto bg-base-100 p-2">
          <div className="flex justify-between items-center">
            <div className="w-20 h-5"/>
            <p className="text-sm font-bold">Фильты</p>
            <button className="btn btn-sm btn-link btn-ghost normal-case" onClick={() => togglePopup(false)}>Отменить</button>
          </div>

          <MainFilter isMobile/>

        </div>
      </Popup.Content>
    </>
  );
};

export default MobileMainFilter;
