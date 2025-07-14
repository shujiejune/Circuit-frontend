export interface ProductItem {
  product_id: number;
  name: string;
  location: {
    warehouse: string;
    address: string;
  };
  description: string;
  price: number;
  stock: number;
}
