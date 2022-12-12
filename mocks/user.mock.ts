import {User} from "../utils/interfaces/user";

export const data: User = {
  id: 1,
  firstName: "Заир",
  lastName: "Нурмухамадов",
  middleName: null,
  email: "zair.nur@yandex.ru",
  login: "zair.nur",
  phoneNumber: {
    raw: '+996224955454',
    formatted: '+996 (224) 95-54-54'
  },
  avatar: 'https://api.lorem.space/image/face?w=150&h=150',
  // avatar: null,
  birthday: '1994-03-14',
  sex: 'male'
}
