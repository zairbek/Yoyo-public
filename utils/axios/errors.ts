export class ErrorResponse {
  constructor(public message: string, public status: number) { }
}

export  class  ValidationError  implements  ErrorResponse {
  constructor(public  message: any, public  status:  number) { }
}

export  class  InternalServerError implements  ErrorResponse {
  constructor(public  message:  string, public  status:  number) { }
}
