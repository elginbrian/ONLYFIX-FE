import { AccountType } from "./enum";

export class User {
  user_id: string;
  username: string;
  email: string;
  password: string;
  account_type: AccountType;

  constructor(user_id: string, username: string, email: string, password: string, account_type: AccountType) {
    this.user_id = user_id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.account_type = account_type;
  }
}
