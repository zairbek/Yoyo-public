import React from 'react';
import cx from "classnames";
import {User} from "../../../utils/interfaces/user";
import Image from "next/image";

export enum AvatarState {
  online = 'online',
  offline = 'offline',
}

interface AvatarProps {
  userData: User
  state?: AvatarState
  size?: string
}

const Avatar: React.FC<AvatarProps> = ({
  userData,
  state,
  size,
}) => {
  const image = userData.avatar
    ? <Image src={userData.avatar} width={150} height={150} alt={getName(userData)}/>
    : <span className="text-xl">{getInitials(userData)}</span>

  return (
    <div className={cx(
      "avatar",
      state,
      ! userData.avatar && 'placeholder'
    )}>
      <div className={cx(
        `rounded-full`,
        size,
        ! userData.avatar && 'bg-neutral-focus text-neutral-content'
      )}>
        {image}
      </div>
    </div>
  );
};

const getName = (user: User): string => {
  const fullName = `${user.firstName} ${user.lastName} ${user.middleName}`.trim()
  const email = user.email
  const login = user.login

  return fullName || email || login;
}

const getInitials = (user: User): string => {
  const fullName = `${user.firstName?.charAt(0)} ${user.lastName?.charAt(0)}`.trim()
  if (!! fullName) {
    return fullName.toUpperCase()
  }

  if (user.email) {
    return user.email.substring(0, 2)
  }

  return user.login.substring(0, 2)
}

export {Avatar};
