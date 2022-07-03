export type AuthWithPhoneDto = {
  phone: string;
}
export type AuthWithPhoneConfirmDto = {
  phone: string;
  code: string;
}
export type AuthWithEmailDto = {
  email: string;
}
export type AuthWithEmailConfirmDto = {
  email: string;
  code: string;
}

export type InitAuthResponse = {
  message: string;
  status: string;
}

export type AuthTokens = {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export type AuthResponse = {
  token: AuthTokens
}

export type UserResponse = {
  id: number
  login?: string
  email?: string
  first_name?: string
  last_name?: string
  middle_name?: string
  phone_number?: string
  avatar?: string
  birthday?: string
  gender?: string
  status?: string
}
