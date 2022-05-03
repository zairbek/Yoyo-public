import Popup from "./Popup";
import Trigger from "./Trigger";
import Content from "./Content";

Popup.Trigger = Trigger;
Popup.Content = Content;

/**
 * Пример реолихаций
 *
 * import React, {useState} from 'react';
 * import Popup from "../../../UI/Popups/Popup";
 *
 * const CreateStorePopup = () => {
 *   const [isOpen, togglePopup] = useState(false);
 *
 *   return (
 *     <Popup>
 *       <Popup.Trigger>
 *         <button className="btn btn-primary btn-sm gap-2 normal-case" onClick={() => togglePopup(true)}>Открыть</button>
 *       </Popup.Trigger>
 *
 *       <Popup.Content
 *         isOpen={isOpen}
 *         togglePopup={togglePopup}
 *       >
 *         <div className="card card-compact w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[70rem] bg-base-100 shadow-xl mb-10">
 *           <div className="card-body">
 *             <h2 className="card-title">Сменить пароль</h2>
 *
 *             <div className="flex items-center py-2">
 *               <p className="basis-1/3">Текущий пароль</p>
 *               <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Пароль" defaultValue=""/>
 *             </div>
 *
 *             <div className="flex items-center py-2">
 *               <p className="basis-1/3">Пароль</p>
 *               <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Пароль" defaultValue=""/>
 *             </div>
 *
 *             <div className="flex items-center py-2">
 *               <p className="basis-1/3">Подтвердите пароль</p>
 *               <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Подтвердите пароль" defaultValue=""/>
 *             </div>
 *
 *             <div className="card-actions justify-end">
 *               <button className="btn btn-sm normal-case" onClick={() => togglePopup(false)}>Отменить</button>
 *               <button className="btn btn-sm normal-case btn-primary">Сменить</button>
 *             </div>
 *           </div>
 *         </div>
 *       </Popup.Content>
 *     </Popup>
 *   );
 * };
 *
 * export default CreateStorePopup;
 */
export default Popup;
