import {PhoneNumber} from "./phoneNumber";
import {Sex} from './sex'

export interface User {
  id: number,
  firstName: null|string,
  lastName: null|string,
  middleName: null|string,
  email: null|string,
  login: string,
  phoneNumber: null|PhoneNumber,
  avatar: null|string,
  birthday: null|string,
  sex: null|Sex,
}
