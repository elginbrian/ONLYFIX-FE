export class Review {
  review_id: string;
  order_id: string;
  technician_id: string;
  customer_id: string;
  rating: number;
  comment: string;
  review_date: string;

  constructor(review_id: string, order_id: string, technician_id: string, customer_id: string, rating: number, comment: string, review_date: string) {
    this.review_id = review_id;
    this.order_id = order_id;
    this.technician_id = technician_id;
    this.customer_id = customer_id;
    this.rating = rating;
    this.comment = comment;
    this.review_date = review_date;
  }
}
