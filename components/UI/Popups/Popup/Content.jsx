import React from 'react';
import {Transition} from "react-transition-group";

const Content = ({
  isOpen,
  togglePopup,
  children
}) => {
  const duration = 100;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0},
    entered:  { opacity: 1},
    exiting:  { opacity: 0},
    exited:  { opacity: 0, display: 'none'},
  };


  return (
    <Transition
      in={isOpen}
      timeout={duration}
    >

      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          data-modal="modal"
          className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-gray-700/50 z-[9999] flex justify-center items-center"
          onClick={(event) => {
            if (event.target.dataset?.modal === 'modal') {
              togglePopup(false)
            }
          }}>
          {children}
        </div>
        )}
    </Transition>
  );
};

export default Content;
