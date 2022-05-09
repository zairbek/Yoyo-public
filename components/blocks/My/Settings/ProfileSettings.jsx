import React, {useState} from 'react';
import DatePicker from "../../../UI/DataPicker/DatePicker";

const ProfileSettings = () => {
  const [isEditable, setEditable] = useState(false);

  let birthDate = 'Mon Mar 14 1994 19:24:34 GMT+0000';
  const [startDate, setStartDate] = useState(new Date(birthDate));

  return (
    <div className="mb-5 text-sm md:text-md">
      <div className="flex justify-between">
        <h2 className="text-md md:text-xl font-bold">Профиль</h2>
        {isEditable
          ?
          <div className="flex gap-2">
            <button className="btn btn-outline btn-xs md:btn-sm gap-2 normal-case" onClick={() => setEditable(false)}>
              Отменить
            </button>
            <button className="btn btn-primary btn-xs md:btn-sm gap-2 normal-case">
              Сохранить
            </button>
          </div>
          :
          <div>
            <button className="btn btn-outline btn-xs md:btn-sm gap-2 normal-case" onClick={() => setEditable(true)}>
              Редактировать
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
            </button>
          </div>
        }
      </div>

      <div className="divider my-0"/>

      <div className="flex md:items-center my-2">
        <p className="basis-1/4">ФИО</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ?
            <div className="flex gap-2 flex-col md:flex-row">
              <input type="text" className="basis-1/4 input input-sm input-bordered" placeholder="Фамилия" defaultValue="Нурмухамадов"/>
              <input type="text" className="basis-1/4 input input-sm input-bordered" placeholder="Имя" defaultValue="Заир"/>
              <input type="text" className="basis-2/4 input input-sm input-bordered" placeholder="Отчество" defaultValue="Улугбек угли"/>
            </div>
          : <p>Нурмухамадов Заир Улугбек угли</p>
          }
        </div>
      </div>

      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Пол</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ?
            <select className="select select-sm select-bordered font-normal" defaultValue="">
              <option disabled value="">Выберите пол</option>
              <option>Мужчина</option>
              <option>Женщина</option>
            </select>
          : <p>Мужчина</p>
          }
        </div>
      </div>

      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4 truncate">День рождения</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ? <
            DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="d MMMM yyyy"
            />
          : <p>14 март 1994г</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
