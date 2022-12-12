import React, {useState} from 'react';

import ChangePasswordPopup from "../../../Elements/Popups/ChangePasswordPopup/ChangePasswordPopup";
import {Button} from "../../../shared/Button";
import Pencil from "../../../shared/Icon/Icons/Solid/Pencil";
import {IconSizes} from "../../../shared/Icon";
import {ButtonColors, ButtonSize} from "../../../shared/Button/Button";
import {Input} from "../../../shared/Forms/Input";
import {InputSizes} from "../../../shared/Forms/Input/Input";
import {Divider} from "../../../shared/Divider";
import InputMask from "../../../shared/Forms/Input/InputMask";
import {data as user} from '../../../../mocks/user.mock';

const MainSettings: React.FC = () => {
  const [isEditable, setEditable] = useState(false);


  return (
    <div className="mb-5 text-sm md:text-md">
      <div className="flex justify-between">
        <h2 className="text-md md:text-xl font-bold">Основное</h2>
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

      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Логин</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ? <Input placeholder="Логин" bordered defaultValue={user.login} size={InputSizes.sm} className="w-full" name="login"/>
            : <p>{user.login}</p>
          }
        </div>
      </div>
      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Email</p>
        <div className="basis-3/4 text-muted">
          {isEditable
          ? <Input type="email" placeholder="Email" bordered defaultValue={user.email || ''} size={InputSizes.sm} className="w-full" name="email"/>
          : <p>{user.email}</p>
          }
        </div>
      </div>
      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Пароль</p>

        <div className="basis-3/4">
          {isEditable
            ? <ChangePasswordPopup/>
            : <p className="basis-3/4 text-muted">........</p>
          }
        </div>
      </div>
      <div className="flex items-center my-2 h-8">
        <p className="basis-1/4">Телефон номер</p>
        <div className="basis-3/4 text-muted">
          {isEditable
            ? <InputMask name={'phoneNumber'} type="tel" className={"w-full"} size={InputSizes.sm} bordered placeholder={"Телефон номер"} defaultValue={user.phoneNumber?.raw} mask="+\9\96 (999) 99-99-99"/>
            : <p>{user.phoneNumber?.formatted}</p>
          }
        </div>
      </div>



    </div>
  );
};

export default MainSettings;
