import React, {useState} from 'react';
import Popup from "../../../UI/Popups/Popup";
import CreateStoreTab from "./CreateStoreTab";

const CreateStorePopup = () => {
  const [isOpen, togglePopup] = useState(false);

  return (
    <Popup>
      <Popup.Trigger>
        <button
          className="btn btn-primary btn-sm gap-2 normal-case"
          onClick={() => togglePopup(true)}
        >
          Создать магазин
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </button>
      </Popup.Trigger>


      <Popup.Content
        isOpen={isOpen}
        togglePopup={togglePopup}
      >
        <div className="card card-compact bg-base-100 shadow-xl mb-10">
          <div className="card-body">
            <div className="card-title flex justify-between">
              <h2>Создание магазина</h2>
              <button className="btn btn-circle btn-sm btn-outline" onClick={() => togglePopup(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <CreateStoreTab/>

          </div>
        </div>

      </Popup.Content>
    </Popup>
  );
};

export default CreateStorePopup;
