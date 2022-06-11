import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {setCookie} from 'nookies';

import {loginViaPhoneConfirmFormSchema} from "../../../../utils/validations/login";
import TextField from "../../../UI/Forms/TextField/TextField";
import Button from "../../../UI/Forms/Button/Button";
import {AuthApi} from "../../../../utils/api";
import {AuthWithPhoneConfirmDto} from "../../../../utils/api/types";
import {useAppDispatch} from "../../../../store/hooks";
import {setUserData} from "../../../../store/slices/auth";

interface ConfirmPhoneSignInTabProps {
  phone: string;
  onBack: () => void
}

const ConfirmPhoneSignInTab: React.FC<ConfirmPhoneSignInTabProps> = ({
  phone,
  onBack,
}) => {
  const dispatch = useAppDispatch()
  const confirmForm = useForm({
    resolver: yupResolver(loginViaPhoneConfirmFormSchema)
  })

  const onSubmitConfirm: SubmitHandler<any> = async (dto: AuthWithPhoneConfirmDto) => {
    dto.phone = dto.phone.replace(/[^\d]/g, '');

    try {
      const data = await AuthApi.phoneConfirm(dto)
      const token = data.token.token_type + ' ' + data.token.access_token
      setCookie(null, 'token', token, {
        maxAge: data.token.expires_in,
        path: '/',
      })

      const userData = await AuthApi.me(token);
      dispatch(setUserData(userData))

      console.log(userData)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <>
      <button className="btn btn-ghost normal-case relative" onClick={() => onBack()}>
        <svg className="h-5 w-5 absolute left-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Назад
      </button>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Войти</h1>
        <p className="text-sm text-coolGray-400">Войдите в систему для доступа к своему аккаунту</p>
      </div>

      <form action="" onSubmit={confirmForm.handleSubmit(onSubmitConfirm)}>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-col gap-y-6">
            <div>
              <TextField
               label="Телефон"
               type="tel"
               name="phone"
               mask="+\9\96 (999) 99-99-99"
               placeholder="+996 (___) __-__-__"
               error={!!confirmForm.formState.errors.phone?.message}
               message={confirmForm.formState.errors.phone?.message}
               defaultValue={phone}
               disabled
               form={confirmForm.register('phone')}
              />
              <TextField
               label="Код подтверждение"
               name="code"
               placeholder="Код подтверждение"
               error={!!confirmForm.formState.errors.code?.message}
               message={confirmForm.formState.errors.code?.message}
               form={confirmForm.register('code')}
              />
            </div>

            <div>
              <Button variant="primary" block disabled={confirmForm.formState.isSubmitting}>Войти</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ConfirmPhoneSignInTab;
