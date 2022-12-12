import React, {useState} from 'react';
import {format} from 'date-fns'
import {ru} from "date-fns/locale";

import DatePicker from "../../../UI/DataPicker/DatePicker";
import {Button} from "../../../shared/Button";
import {ButtonColors, ButtonSize} from "../../../shared/Button/Button";
import Pencil from "../../../shared/Icon/Icons/Solid/Pencil";
import {IconSizes} from "../../../shared/Icon";
import {Divider} from "../../../shared/Divider";
import {data as user} from '../../../../mocks/user.mock';
import {SexTypes, SexWords} from '../../../../utils/interfaces/sex'

const ProfileSettings = () => {
  const [isEditable, setEditable] = useState(false);
  const [birthday, setBirthday] = useState(new Date(user.birthday));

  return (
    <div className="mb-5 text-sm md:text-md">
      <div className="flex justify-between">
        <h2 className="text-md md:text-xl font-bold">Профиль</h2>
        {isEditable
          ?
          <div className="flex gap-2">
            <Button outline size={ButtonSize.xs} className="md:btn-sm" onClick={() => setEditable(false)}>
              Отменить
            </Button>
            <Button color={ButtonColors.primary} size={ButtonSize.xs} className="md:btn-sm">
              Сохранить
            </Button>
          </div>
          :
          <Button outline className="md:btn-sm" size={ButtonSize.xs} afterIcon={<Pencil size={IconSizes.mediumSmall}/>} onClick={() => setEditable(true)}>
            Редактировать
          </Button>
        }
      </div>

      <Divider className="my-0"/>

      <div className="flex md:items-center my-2">
        <p className="basis-1/4">ФИО</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ?
            <div className="flex gap-2 flex-col md:flex-row">
              <input type="text" className="basis-1/4 input input-sm input-bordered" placeholder="Фамилия" defaultValue={user.lastName}/>
              <input type="text" className="basis-1/4 input input-sm input-bordered" placeholder="Имя" defaultValue={user.firstName}/>
              <input type="text" className="basis-2/4 input input-sm input-bordered" placeholder="Отчество" defaultValue={user.middleName}/>
            </div>
          : <p>{user.lastName} {user.firstName} {user.middleName}</p>
          }
        </div>
      </div>

      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Пол</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ?
            <select className="select select-sm select-bordered font-normal" defaultValue={user.sex ?? ''}>
              <option disabled value="">Выберите пол</option>
              {Object.keys(SexWords).map(key => (<option key={key} value={key}>{SexWords[key]}</option>))}
            </select>
          : <p>{user.sex ? SexWords[user.sex] : ''}</p>
          }
        </div>
      </div>

      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4 truncate">День рождения</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ? <
            DatePicker
              selected={birthday}
              onChange={(date) => setBirthday(date)}
              dateFormat="d MMMM yyyy"
            />
          : <p>{format(birthday, 'd MMMM yyyy', {locale: ru})}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
