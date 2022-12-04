import React from 'react';

interface DropdownItemProps {
  children?: React.ReactNode
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
}) => {
  return (
    <li><a>{children}</a></li>
  );
};

export {DropdownItem};
