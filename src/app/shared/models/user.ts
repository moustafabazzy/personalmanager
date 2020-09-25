export interface UserInterface {

  firstname: string,
  lastname: string,
  email: string,
  password: string
}

export class User implements UserInterface {

  firstname;
  lastname;
  email;
  password;

  constructor(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.password = data.password;
  }
}
