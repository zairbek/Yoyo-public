import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {setCookie} from 'nookies';

import {loginViaEmailConfirmFormSchema} from "../../../../utils/validations/login";
import TextField from "../../../UI/Forms/TextField/TextField";
import Button from "../../../UI/Forms/Button/Button";
// import {AuthApi} from "../../../../utils/api";
import {AuthWithEmailConfirmDto} from "../../../../utils/api/types";

interface ConfirmEmailSignInTabProps {
  email: string;
  onBack: () => void
}

const ConfirmEmailSignInTab: React.FC<ConfirmEmailSignInTabProps> = ({
  email,
  onBack,
}) => {
  const confirmForm = useForm({
    resolver: yupResolver(loginViaEmailConfirmFormSchema)
  })

  const onSubmitConfirm = async (dto: AuthWithEmailConfirmDto) => {
    try {
      console.table(dto)
      // const data = await AuthApi.emailConfirm(dto)
      // setCookie(null, 'token', data.token.token_type + ' ' + data.token.access_token, {
      //   maxAge: data.token.expires_in
      // })
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

      <form onSubmit={confirmForm.handleSubmit(onSubmitConfirm)}>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-col gap-y-6">
            <div>
              <TextField
                label="Email"
                name="email"
                error={!!confirmForm.formState.errors.email?.message}
                message={confirmForm.formState.errors.email?.message}
                defaultValue={email}
                // disabled
                form={confirmForm.register('email')}
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

export default ConfirmEmailSignInTab;
