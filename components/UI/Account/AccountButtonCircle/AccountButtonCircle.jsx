import React from 'react';
import Link from 'next/link'
import SignInPopup from "../../../Elements/Popups/SignInPopup";
import {useAppSelector} from "../../../../store/hooks";
import {selectUserData} from "../../../../store/slices/auth";

const AccountButtonCircle = () => {
  const userData = useAppSelector(selectUserData)

  if (! userData) {
    return (
      <SignInPopup/>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791"/>
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

        <div className="py-2 px-4">
          <p className="">Заир Нурмухамадов</p>
          <p className="text-sm text-muted">Продавец</p>
        </div>

        <div className="divider my-0"/>

        <li>
          <Link href="/my/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/my/settings">
            <a>Настройки</a>
          </Link>
        </li>
        <li><a>Выйти</a></li>
      </ul>
    </div>
  );
};

export default AccountButtonCircle;
