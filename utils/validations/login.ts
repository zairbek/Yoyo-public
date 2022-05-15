import * as yup from 'yup';

export const loginViaPhoneFormSchema = yup.object().shape({
  phone: yup.string().required('Поля обязательно')
});

export const loginViaEmailFormSchema = yup.object().shape({
  email: yup.string().email('Некоректный email').required('Поля обязательно')
});
