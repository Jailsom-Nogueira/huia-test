export interface ProductCardProps {
  productDescription: string;
  productThumbnail: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
  productId: string;
  productQuantity: number;
};

export interface ProductProps {
  product: ProductCardProps 
};
