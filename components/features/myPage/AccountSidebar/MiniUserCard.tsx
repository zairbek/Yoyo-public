import React from 'react';
import Link from "next/link";
import {Avatar} from "../../../shared/Avatar";
import {AvatarState} from "../../../shared/Avatar/Avatar";
import {User} from "../../../../utils/interfaces/user";

interface MiniUserCardProps {
  userData: User
}

const MiniUserCard: React.FC<MiniUserCardProps> = ({userData}) => {
  return (<>
      <Avatar
        userData={userData}
        size={'w-24 lg:w-32'}
      />

      <div className="flex flex-col">
        <UserNames userData={userData}/>
        <Link href="/my/settings/">
          <a className="link link-secondary text-sm">Изменить профиль</a>
        </Link>
      </div>
    </>);
};

const UserNames: React.FC<MiniUserCardProps> = ({userData}) => {

  if (userData.firstName) {
    const firstName = (<span className="font-bold text-xl">{userData.firstName}</span>)
    let lastname = null

    if (userData.lastName) {
      lastname = (<span className="font-bold text-xl">{userData.lastName} {userData.middleName?.charAt(0)}</span>)
    }

    return (<>{firstName}{lastname}</>)
  }

  if (userData.email) {
    return (<span className="font-bold text-xl">{userData.email}</span>)
  }

  return (<span className="font-bold text-xl">{userData.login}</span>)
}

export default MiniUserCard;
