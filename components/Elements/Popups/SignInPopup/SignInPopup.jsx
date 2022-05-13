import React, {useState} from 'react';
import Popup from "reactjs-popup";

const SignInPopup = () => {
  const [isOpen, togglePopup] = useState(false);

  const button = (
    <button className="btn btn-ghost btn-circle avatar" onClick={() => togglePopup(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </button>
  )

  return (
    <Popup trigger={button} modal>

      <div className="card card-compact bg-base-100 w-[24rem] p-6 sm:p-10 relative">
        <button type="button" className="btn btn-ghost btn-circle absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Войти</h1>
          <p className="text-sm text-coolGray-400">Войдите в систему для доступа к своему аккаунту</p>
        </div>
        <form noValidate="" action="">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="flex flex-col gap-y-6">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Телефон</label>
                <input type="email" name="phone" id="phone" placeholder="+996 772 123 456" className="input input-bordered w-full max-w-xs" />
      			  </div>
        		  <div>
                <button type="button" className="btn btn-primary btn-block normal-case">Sign in</button>
              </div>
            </div>

            <div className="divider">или</div>

            <div>
              <div className="flex gap-x-2">
                <button className="btn btn-outline btn-primary btn-block basis-1/3 hover:fill-white">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                </button>
                <button className="btn btn-outline btn-primary btn-block basis-1/3 hover:fill-white">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </button>
                <button className="btn btn-outline btn-primary btn-block basis-1/3 hover:fill-white">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M275.1 334c-27.4 17.4-65.1 24.3-90 26.9l20.9 20.6 76.3 76.3c27.9 28.6-17.5 73.3-45.7 45.7-19.1-19.4-47.1-47.4-76.3-76.6L84 503.4c-28.2 27.5-73.6-17.6-45.4-45.7 19.4-19.4 47.1-47.4 76.3-76.3l20.6-20.6c-24.6-2.6-62.9-9.1-90.6-26.9-32.6-21-46.9-33.3-34.3-59 7.4-14.6 27.7-26.9 54.6-5.7 0 0 36.3 28.9 94.9 28.9s94.9-28.9 94.9-28.9c26.9-21.1 47.1-8.9 54.6 5.7 12.4 25.7-1.9 38-34.5 59.1zM30.3 129.7C30.3 58 88.6 0 160 0s129.7 58 129.7 129.7c0 71.4-58.3 129.4-129.7 129.4s-129.7-58-129.7-129.4zm66 0c0 35.1 28.6 63.7 63.7 63.7s63.7-28.6 63.7-63.7c0-35.4-28.6-64-63.7-64s-63.7 28.6-63.7 64z"/></svg>
                </button>
              </div>
            </div>

              <p className="p-2 text-sm text-center">
                <button className="btn btn-primary btn-link normal-case">Ввойти по почте</button>.
              </p>

          </div>
        </form>
      </div>


      {/*<div className="card card-compact w-[30rem] bg-base-100 shadow-xl mb-10">*/}
      {/*  <div className="card-body">*/}
      {/*    <h2 className="card-title"></h2>*/}

      {/*    <div className="flex items-center py-2">*/}
      {/*      <p className="basis-1/3">Текущий пароль</p>*/}
      {/*      <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Текущий пароль" defaultValue=""/>*/}
      {/*    </div>*/}

      {/*    <div className="flex items-center py-2">*/}
      {/*      <p className="basis-1/3">Пароль</p>*/}
      {/*      <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Пароль" defaultValue=""/>*/}
      {/*    </div>*/}

      {/*    <div className="flex items-center py-2">*/}
      {/*      <p className="basis-1/3">Подтвердите пароль</p>*/}
      {/*      <input type="password" className="basis-2/3 input input-sm input-bordered" placeholder="Подтвердите пароль" defaultValue=""/>*/}
      {/*    </div>*/}

      {/*    <div className="card-actions justify-end">*/}
      {/*      <button className="btn btn-sm normal-case" onClick={() => togglePopup(false)}>Отменить</button>*/}
      {/*      <button className="btn btn-sm normal-case btn-primary">Сменить</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Popup>
  );
};

export default SignInPopup;
