import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import InputMask from 'react-input-mask';

import {loginViaPhoneFormSchema} from "../../../../utils/validations/login";
import TextField from "../../../UI/Forms/TextField/TextField";

const SignInTab = ({emailLogin}) => {
  const form = useForm({
    resolver: yupResolver(loginViaPhoneFormSchema)
  })

  const onSubmit = data => console.log(data)

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Войти</h1>
        <p className="text-sm text-coolGray-400">Войдите в систему для доступа к своему аккаунту</p>
      </div>

      <form noValidate="" action="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-col gap-y-6">
            <div>

              <TextField
               label="Телефон"
               name="phone"
               mask="+\9\96 (999) 99-99-99"
               placeholder="+996 (___) __-__-__"
               error={!!form.formState.errors.phone?.message}
               message={form.formState.errors.phone?.message}
               form={form.register('phone')}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-block normal-case">Sign in</button>
            </div>
          </div>

          <div className="divider">или</div>

          <div>
            <div className="flex gap-x-2">
              <button type="button" className="btn btn-outline btn-primary btn-block flex-1 hover:fill-white">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
              </button>
              <button type="button" className="btn btn-outline btn-primary btn-block flex-1 hover:fill-white">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </button>
              <button type="button" className="btn btn-outline btn-primary btn-block flex-1 hover:fill-white">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M275.1 334c-27.4 17.4-65.1 24.3-90 26.9l20.9 20.6 76.3 76.3c27.9 28.6-17.5 73.3-45.7 45.7-19.1-19.4-47.1-47.4-76.3-76.6L84 503.4c-28.2 27.5-73.6-17.6-45.4-45.7 19.4-19.4 47.1-47.4 76.3-76.3l20.6-20.6c-24.6-2.6-62.9-9.1-90.6-26.9-32.6-21-46.9-33.3-34.3-59 7.4-14.6 27.7-26.9 54.6-5.7 0 0 36.3 28.9 94.9 28.9s94.9-28.9 94.9-28.9c26.9-21.1 47.1-8.9 54.6 5.7 12.4 25.7-1.9 38-34.5 59.1zM30.3 129.7C30.3 58 88.6 0 160 0s129.7 58 129.7 129.7c0 71.4-58.3 129.4-129.7 129.4s-129.7-58-129.7-129.4zm66 0c0 35.1 28.6 63.7 63.7 63.7s63.7-28.6 63.7-63.7c0-35.4-28.6-64-63.7-64s-63.7 28.6-63.7 64z"/></svg>
              </button>
            </div>
          </div>

            <p className="p-2 text-sm text-center">
              <button type="button" className="btn btn-primary btn-link normal-case" onClick={() => emailLogin()}>Ввойти по почте</button>.
            </p>

        </div>
      </form>
    </>
  );
};

export default SignInTab;
