import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {loginViaEmailFormSchema} from "../../../../utils/validations/login";
import TextField from "../../../UI/Forms/TextField/TextField";
import {AuthWithEmailDto} from "../../../../utils/api/types";

interface EmailSignInTab {
  onBack: () => void;
  toConfirmCodeTab: (email: string) => void;
}

const EmailSignInTab: React.FC<EmailSignInTab> = ({
  onBack,
  toConfirmCodeTab
}) => {
  const form = useForm({
    resolver: yupResolver(loginViaEmailFormSchema)
  })

  const onSubmit = (dto: AuthWithEmailDto) => {
    toConfirmCodeTab(dto.email)
  }

  console.log(form.formState.errors)

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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-col gap-y-6">

            <TextField
              label="Email"
              name="email"
              placeholder="example@mail.com"
              error={!!form.formState.errors.email?.message}
              message={form.formState.errors.email?.message}
              form={form.register('email')}
            />

            <div>
              <button type="submit" className="btn btn-primary btn-block normal-case">Войти</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailSignInTab;
