import React from 'react';
import Link from 'next/link'
import SignInPopup from "../../../Elements/Popups/SignInPopup";
import {useAppSelector} from "../../../../store/hooks";
import {selectUserData} from "../../../../store/slices/auth";
import Avatar from "../../Avatar/Avatar";

const AccountButtonCircle = () => {
  const userData = useAppSelector(selectUserData)

  if (! userData) {
    return (
      <SignInPopup/>
    );
  }

  let displayName;
  let imagePlaceholder;

  switch (true) {
    case !! userData.first_name || userData.last_name:
      displayName = `${userData.first_name} ${userData.last_name}`;
      imagePlaceholder = `${userData?.first_name[0]} ${userData?.last_name[0]}`
      break;
    case !! userData.email:
      displayName = userData.email
      imagePlaceholder = userData.email.substring(0, 2)
      break
    case !! userData.login:
      displayName = userData.login
      imagePlaceholder = userData.login.substring(0, 2)
      break
    case !! userData.phone_number:
      displayName = userData.phone_number;
      imagePlaceholder = userData.phone_number.slice(-2)
      break
    default:
      displayName = userData.id
      imagePlaceholder = userData.id
  }


  return (
    <div className="dropdown dropdown-end">

      <Avatar
        label
        placeholder={imagePlaceholder}
        src={userData.avatar}
        alt={displayName}
      />

      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

        <div className="py-2 px-4">
          <p className="">{displayName}</p>
          {/*<p className="text-sm text-muted">Продавец</p>*/}
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
