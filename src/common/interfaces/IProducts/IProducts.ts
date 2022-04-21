export interface ProductCardProps {
  productDescription: string;
  productTitle: string;
  productPrice: number;
  productId: string;
};

export interface ProductProps {
  product: ProductCardProps 
};
