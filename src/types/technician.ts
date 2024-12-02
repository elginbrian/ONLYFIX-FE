import { Category } from "./enum";

export class Technician {
  user_id: string;
  description: string;
  price: number;
  phone_num: string;
  city: string;
  rating: number;
  category: Category;
  availability: string;

  constructor(user_id: string, description: string, price: number, phone_num: string, city: string, rating: number, category: Category, availability: string) {
    this.user_id = user_id;
    this.description = description;
    this.price = price;
    this.phone_num = phone_num;
    this.city = city;
    this.rating = rating;
    this.category = category;
    this.availability = availability;
  }
}
