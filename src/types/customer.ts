export class Customer {
  user_id: string;
  phone_num: string;
  address: string;
  city: string;

  constructor(user_id: string, phone_num: string, address: string, city: string) {
    this.user_id = user_id;
    this.phone_num = phone_num;
    this.address = address;
    this.city = city;
  }
}
