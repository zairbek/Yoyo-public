import React from 'react';
import Link from "next/link";
import classNames from "classnames";
import {useAppSelector} from "../../../store/hooks";
import {selectUserData} from "../../../store/slices/auth";
import Avatar from "../../UI/Avatar/Avatar";

interface AccountSidebarProps {
  className?: string;
  isMobile?: boolean;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  className,
  isMobile = false
}) => {
  const userData = useAppSelector(selectUserData)

  if (!userData) {
    return <p>err</p>;
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
    <aside className={classNames(
      "top-20 lg:basis-1/5 bg-white shadow-md mr-8 rounded-2xl overflow-hidden",
      className,
      isMobile && 'w-full'
    )}>

      <div className={classNames(
        "flex items-center gap-x-4",
        !isMobile ? 'flex-col p-5' : 'flex-row'
      )}>
        {/* @url https://daisyui.com/components/avatar/#avatar-placeholder */}

        <Avatar
          src={userData.avatar}
          placeholder={imagePlaceholder}
          alt={displayName}
          size={'w-24 lg:w-32 '}
        />

        <div className="avatar lg:mx-auto m-4">
          <div className="w-24 lg:w-32 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=92310"/>
          </div>
        </div>




        <div className="flex flex-col">
          <span className="font-bold text-xl">Заир</span>
          <span className="font-bold text-xl">Нурмухамадов</span>
          <Link href="/my/settings/">
            <a className="link link-secondary text-sm">Изменить профиль</a>
          </Link>
        </div>
      </div>

      <div className="divider my-0"/>

      <div>
        <ul className="menu menu-compact p-2 rounded-box">
          {/** лист хедеры
          <li className="menu-title">
            <a>
              Личная информация
            </a>
          </li>
          **/}
          <li>
            <Link href="/my/dashboard/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/my/stores/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                Мои магазины
              </a>
            </Link>
          </li>
          <li>
            <Link href="/my/settings/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Настройки
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="divider my-0"/>

      <ul className="menu menu-compact p-2 rounded-box">
         <li className="menu-title">
          <a>Мои магазины</a>
         </li>
        <li>
          <Link href="/my/stores/cross/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
              Крассовки
            </a>
          </Link>
        </li>
      </ul>

    </aside>
  );
};

export default AccountSidebar;
