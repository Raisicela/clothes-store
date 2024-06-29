export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  stock: number;
  rate: number;
  categoryId: string;
  createdAt: string;
  avatar?: string;
  __v: number;
}
