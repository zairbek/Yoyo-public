import React from 'react';
import classNames from "classnames";

interface AvatarProps {
  avatar?: boolean
  placeholder?: string
  src?: string
  label?: boolean
  online?: boolean
  size?: string
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({
  label,
  placeholder,
  src,
  online,
  size = 'w-10',
  alt,
}) => {


  const avatar = src
    ? <img src={src} alt={alt || placeholder}/>
    : <span className="text-xl">{placeholder}</span>

  const placeholderType = ! (!! src)

  const status = online === true
    ? 'online'
    : online === false
      ? 'offline'
      : ''


  if (label) {
    return (
      <label tabIndex={0} className={classNames(
        "avatar btn btn-ghost btn-circle",
        status,
        placeholderType && 'placeholder',
      )}>
        <div className={classNames(
          "rounded-full",
          size,
          placeholderType && 'bg-neutral-focus text-neutral-content',
        )}>
          {avatar}
        </div>
      </label>
    )
  }


  return (
    <div className={classNames(
      "avatar",
        status,
        placeholderType && 'placeholder',
      )}>
      <div className={classNames(
        "rounded-full",
        size,
        placeholderType && 'bg-neutral-focus text-neutral-content',
      )}>
        {avatar}
      </div>
    </div>
  );
};

export default Avatar;
