export interface Product {
  name: string;
  description: string;
  price: number;
  currency: Currency;
  avatar: string;
  stock: number;
  rate: number;
  categoryId: CategoryID;
}

export enum CategoryID {
  The6672509A02983040465Ab2Fa = '6672509a02983040465ab2fa',
  The6672509A02983040465Ab308 = '6672509a02983040465ab308',
}

export enum Currency {
  Usd = 'USD',
}
